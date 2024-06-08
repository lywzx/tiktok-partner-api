import { SOURCE_ROOT_DIR } from '../constant';
import {
  createRequestClassName,
  createResponseClassName,
  generateConstant,
  saveCode,
} from './index';
import {
  ApiDetailInterface, IApiBodyParam, IApiBodyParamWithTree,
} from '../interface/api-detail.interface';
import {CodeColumnInterface, CodeInterface} from '../interface/code.interface';
import {RunStateFileInterface, RunStateInterface} from '../interface/run-state.interface';
import map from 'lodash/map';
import flattenDeep from 'lodash/flattenDeep';
import filter from 'lodash/filter';
import { join } from 'path';
import {CategoryListItemInterface} from "../interface/category-list-item.interface";

/**
 * 根据每个api的信息，创建对应的代码内容
 * @param category
 * @param parentCategory
 * @param detail
 */
export function generateCode(category: CategoryListItemInterface, parentCategory: CategoryListItemInterface, detail: ApiDetailInterface) {
  const apiIdConstant = generateConstant(category.name);

  const exportResponseShortKey: string[] = [];
  if (detail.interface_path) {
    exportResponseShortKey.push(`export const ${apiIdConstant}_URL_PATH = '${detail.interface_path}';`);
  }

  if (detail.method) {
    exportResponseShortKey.push(`export const ${apiIdConstant}_METHOD = '${detail.method}';`);
  }

  const requestClassCode = buildParamsToCodeArr(detail.request_query_param, detail, [category, parentCategory], 'request');

  const requestClassBodyCode = buildParamsToCodeArr(detail.request_body_param, detail, [category, parentCategory],'request');

  const responseClassCode = buildParamsToCodeArr(detail.response_param, detail, [category, parentCategory],'response');

  return `${exportResponseShortKey.join('')}

${codeToString(requestClassBodyCode)}

${codeToString(requestClassCode)}

${codeToString(responseClassCode)}
`;
}

/**
 * 将params转换成树形结构
 * @param params
 */
export function apiBodyToTree(params: IApiBodyParam[]): IApiBodyParamWithTree[] {
  const result:IApiBodyParamWithTree[] = [];
  const paramsCloned = params.slice();
  const anchor: IApiBodyParamWithTree[] = [];
  while (paramsCloned.length) {
    const current = {...paramsCloned.shift()!, children: []} as IApiBodyParamWithTree;

    const lastAnchor = anchor[anchor.length - 1];

    if (!lastAnchor) {
      result.push(current);
      anchor.push(current);
      continue;
    }

    const currentDepth = current.name.match(/(\^*)/)![0];
    const lastDepth = lastAnchor.name.match(/(\^*)/)![0];
    let currentAnchor: IApiBodyParamWithTree[] = result;
    if (lastDepth === currentDepth) {
      anchor.pop();
      if (anchor.length) {
        currentAnchor = anchor[anchor.length - 1].children;
      }
    } else if (currentDepth > lastDepth) {
      currentAnchor = lastAnchor.children;
    } else if (currentDepth < lastDepth) {
      anchor.splice(-2, 2);
      if (anchor.length) {
        currentAnchor = anchor[anchor.length - 1].children;
      }
    }
    currentAnchor.push(current);
    anchor.push(current);
  }
  return result;
}


export function buildParamsToCodeArr(
  params: IApiBodyParam[],
  apiDetail: ApiDetailInterface,
  categories: CategoryListItemInterface[],
  type: 'request' | 'response'
): CodeInterface[] {
  const treed = apiBodyToTree(params);

  const clsFn = type === 'request' ? createRequestClassName : createResponseClassName;
  const baseInterface: CodeInterface = {
    name: clsFn(apiDetail.title),
    comment: `接口名称：${apiDetail.title}
接口标识：${apiDetail.title}
接口使用场景：${apiDetail.title}`,
    columns: [],
  };

  return buildInterfaceColumn(baseInterface, treed, type);
}

/**
 * 构建请求的interface
 * @param inter
 * @param columns
 * @param t
 */
export function buildInterfaceColumn(
  inter: CodeInterface,
  columns: IApiBodyParamWithTree[],
  t: 'request' | 'response'
): CodeInterface[] {
  const ret: CodeInterface[] = [inter];
  const createFn = t === 'request' ? createRequestClassName : createResponseClassName;

  const columnsClone = columns.slice();
  let current: IApiBodyParamWithTree | undefined;
  while ((current = columnsClone.shift())) {
    const name = current.name;
    let type;
    const optional = current.required !== 'Y';
    let comment;
    if (current.children.length == 0) {
      // 没有了细点
      type = pddTypeToTypescriptType(current.type);
      // 没有字节点，并且又为object，通常会是string[]
      if (type === 'object[]') {
        type = 'string[]';
      }
      comment = `@description: ${current.desc}
@type: ${type}`;
    } else {
      const plainName = `${inter.name.replace(t === 'request' ? 'RequestInterface' : 'ResponseInterface', '')}_${
        current.name
      }`;
      const itCls = createFn(plainName);
      if (current.children && current.children.length) {
        // 需要再创建一个interface
        const innerIt: CodeInterface = {
          name: itCls,
          comment: `@description ${current.desc}`,
          columns: [],
        };
        ret.push(...buildInterfaceColumn(innerIt, current.children, t));
      }
      if (current.type === 'OBJECT' || current.type === 'MAP') {
        type = itCls;
      } else if (current.type === 'OBJECT[]' || current.type === 'MAP[]') {
        type = `${itCls}[]`;
      } else {
        type = current.type;
      }
      comment = `@description: ${current.desc}
@type: ${type}`;
    }
    inter.columns.push({
      name,
      type,
      optional,
      comment,
    });
  }

  return ret;
}

/**
 * 将CodeInterface转换成字符
 * @param arr
 */
function codeToString(arr: CodeInterface[]): string {
  const buildComment = (comment: string, indent = 0) => {
    const commentArr = comment.split(/\n/g);
    const commentArrWithComment = commentArr.map((it) => {
      return ` * ${it}`;
    });
    return ['/**', ...commentArrWithComment, ' **/']
      .map((it: string) => {
        return `${' '.repeat(indent)}${it}`;
      })
      .join('\n');
  };

  const buildColumns = (columns: CodeColumnInterface[], indent = 2) => {
    return columns
      .map((column: CodeColumnInterface) => {
        return [
          buildComment(column.comment, indent),
          `${' '.repeat(indent)}${column.name}${column.optional ? '?' : ''}: ${column.type};`,
        ].join('\n');
      })
      .join('\n\n');
  };

  return arr
    .map((it: CodeInterface) => {
      return `
${buildComment(it.comment, 0)}${
        it.columns.length === 0 ? '\n// eslint-disable-next-line @typescript-eslint/no-empty-interface' : ''
      }
export interface ${it.name} {
${buildColumns(it.columns, 2)}
}`;
    })
    .join('\n\n');
}

/**
 * 转换拼多多的类型
 */
const typeMap = {
  LONG: 'string | number',
  '[]object': 'Array<string | number>',
  '[]string': 'string[]',
  INTEGER: 'number',
  MAP: 'Record<string, any>',
  DOUBLE: 'string',
  FILE: 'Buffer',
};
function pddTypeToTypescriptType(type: string) {
  if (type in typeMap) {
    return (typeMap as any)[type];
  }
  const onlyType = type.replace('[]', '');
  const toType = (typeMap as any)[onlyType] || onlyType.toLowerCase();

  if (onlyType === type) {
    return toType;
  } else {
    return `${toType}[]`;
  }
}

/**
 * 生成首页文件
 * @param state
 */
export async function generatorIndexCode(state: RunStateInterface) {
  // 导入变量信息
  const importCodes = map(state.resolvedFiles, (resolved) => {
    return [
      `// ${resolved.name}`,
      ...map(resolved.files, (fl: RunStateFileInterface) => {
        const variables = [
          fl.constVariable,
          fl.responseKey,
          fl.requestInterface,
          fl.responseInterface,
          fl.secondResponseInterface,
        ]
          .filter((it) => !!it)
          .join(',\n  ');
        return `import {
  ${variables}
} from '${fl.name}';`;
      }),
    ].join('\n');
  });

  const flattenResolvedFiles = flattenDeep(map(state.resolvedFiles, 'files'));

  // 请求的type与响应的key之间的响射
  const PddResponseTypeAndRequestTypeMapping = 'PddResponseTypeAndRequestTypeMapping';
  const typeAndResponseKeyMappingInnerCode = map(flattenResolvedFiles, (it: RunStateFileInterface) => {
    if (it.responseKey) {
      return `[${it.constVariable}]: ${it.responseKey}`;
    }
    return undefined;
  })
    .filter((it) => !!it)
    .join(',\n  ');
  const typeAndResponseKeyMappingCode = `const ${PddResponseTypeAndRequestTypeMapping} = {
  ${typeAndResponseKeyMappingInnerCode}
};`;

  // 这里生成一个数组，存储着type，需要用户授权的列表
  const PddNeedAccessTokenTypeCollections = 'PddNeedAccessTokenTypeCollections';
  const PddNeedAccessTokenTypeCollectionsInnerCodes = filter(flattenResolvedFiles, 'needAuth')
    .map((it: RunStateFileInterface) => {
      return it.constVariable;
    })
    .join('\n,  ');
  const PddNeedAccessTokenTypeCollectionsCodes = `const ${PddNeedAccessTokenTypeCollections} = [
  ${PddNeedAccessTokenTypeCollectionsInnerCodes}
];`;

  // 这里生成一个对象，包含了应用限频信息
  // 导出的变量信息
  const exportVariables = map(flattenResolvedFiles, (fl: RunStateFileInterface) => {
    return [fl.constVariable, fl.responseKey, fl.requestInterface, fl.responseInterface, fl.secondResponseInterface]
      .filter((it) => !!it)
      .join(',\n  ');
  })
    .concat([PddResponseTypeAndRequestTypeMapping, PddNeedAccessTokenTypeCollections])
    .join(',\n  ');

  const exportVariablesCode = `export {
  ${exportVariables},
};`;

  const pddCollectRequestInterfaceInnerCode = map(flattenResolvedFiles, (fl: RunStateFileInterface) => {
    return `[${fl.constVariable}]: ${fl.requestInterface};`;
  }).join('\n  ');
  const exportPddRequestInterfaceCode = `export interface PddCollectRequestInterface {
  ${pddCollectRequestInterfaceInnerCode}
}`;

  const pddCollectResponseInterfaceInnerCode = map(flattenResolvedFiles, (fl: RunStateFileInterface) => {
    return `[${fl.constVariable}]: ${fl.responseInterface};`;
  }).join('\n  ');
  const exportPddResponseInterfaceCode = `export interface PddCollectRootResponseInterface {
  ${pddCollectResponseInterfaceInnerCode}
}`;

  const pddCollectResponseSecondInterfaceInnerCode = map(flattenResolvedFiles, (fl: RunStateFileInterface) => {
    return `[${fl.constVariable}]: ${
      !!fl.secondResponseInterface ? fl.secondResponseInterface : fl.responseInterface
    };`;
  }).join('\n  ');
  const pddCollectResponseSecondInterfaceCode = `export interface PddCollectShortResponseInterface {
  ${pddCollectResponseSecondInterfaceInnerCode}
}`;

  return saveCode(
    join(SOURCE_ROOT_DIR, 'index.ts'),
    [
      ...importCodes,
      typeAndResponseKeyMappingCode,
      PddNeedAccessTokenTypeCollectionsCodes,
      exportVariablesCode,
      exportPddRequestInterfaceCode,
      exportPddResponseInterfaceCode,
      pddCollectResponseSecondInterfaceCode,
      generateCommonRequestInterfaceCode('string'),
    ].join('\n')
  );
}

/**
 * 生成通用请求的interface
 */
function generateCommonRequestInterfaceCode(type: string) {
  return `export interface PddCommonRequestInterface {
  /**
   * API接口名称
   */
  type: ${type};

  /**
   * POP分配给应用的client_id
   */
  client_id: string;

  /**
   * 通过code获取的access_token(无需授权的接口，该字段不参与sign签名运算)
   */
  access_token?: string;

  /**
   * UNIX时间戳，单位秒，需要与拼多多服务器时间差值在10分钟内
   */
  timestamp: number;

  /**
   * 响应格式，即返回数据的格式，JSON或者XML（二选一），默认JSON，注意是大写
   * @default JSON
   */
  data_type?: 'JSON' | 'XML';

  /**
   * API协议版本号，默认为V1，可不填
   * @default V1
   */
  version?: string;

  /**
   * API输入参数签名结果，签名算法参考开放平台接入指南第三部分底部。
   */
  sign: string;
}`;
}
