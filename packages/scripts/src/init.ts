import { SOURCE_ROOT_DIR } from './constant';
import { getAllApiCategory, getApiDetailByApiId } from './model';
import { CategoryListItemInterface } from './interface/category-list-item.interface';
import { eachLimit } from 'async';
import {
  createClassName,
  nameToDirectoryName,
  saveCode,
} from './util';
import { join } from 'path';
import { generateCode } from './util/generate-code';
import { ApiDetailInterface } from './interface/api-detail.interface';
import {keyBy} from "lodash";

export async function init() {

  const categories = await getAllApiCategory();

  const categoriesKeyBy = keyBy(categories, 'document_id');

  await eachLimit(categories, 3, async (item, callback) => {
    if (!item.is_api_doc || item.is_dir || item.doc_type !== 1) {
      return callback();
    }

    try {
      await resolveApiDetail(item, categoriesKeyBy[item.parent_id]);
      callback();
    } catch (e) {
      callback(e);
    }
  });
}

// 读取目录
async function resolveApiDetail(category: CategoryListItemInterface, parentCategory: CategoryListItemInterface) {
  await generatorApiFile(category, parentCategory);
}

// 读取API详细信息
async function generatorApiFile(api: CategoryListItemInterface, parentCategory: CategoryListItemInterface): Promise<ApiDetailInterface> {
  const apiInfo = await getApiDetailByApiId(api.document_id);

  const code = generateCode(api, parentCategory, apiInfo);

  const fileName = join(SOURCE_ROOT_DIR, `${nameToDirectoryName(parentCategory.name)}/${createClassName(api.name)}.ts`);
  await saveCode(fileName, code);

  return apiInfo;
}
