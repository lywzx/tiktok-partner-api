import camelCase from 'lodash/camelCase';
import startCase from 'lodash/startCase';
import * as fs from 'fs';
import { normalize, sep } from 'path';
import { promisify } from 'util';
import { TreeType } from '../interface/tree.interface';
import { AsyncResultCallback } from 'async';

export function nameToDirectoryName(name: string): string {
    return camelCase(name);
}

// 创建类名
export function createClassName(apiId: string) {
  return startCase(apiId).replace(/[ ]/g, '');
}

// 创建请求类名
export function createRequestClassName(apiId: string) {
  return `${createClassName(apiId)}RequestInterface`;
}

// 创建响应的API类名
export function createResponseClassName(apiId: string) {
  return `${createClassName(apiId)}ResponseInterface`;
}

/**
 * 判断是否为目录
 * @param dir
 */
export function isDir(dir: string) {
  return promisify(fs.lstat)(dir).then(
    (stat) => stat.isDirectory(),
    () => false
  );
}

/**
 * 递归创建目录
 * @param dir
 */
const mkdirPromisify = promisify(fs.mkdir);
export async function createDirectory(dir: string) {
  const dirArr = normalize(dir).split(sep);

  const directoryLength = dirArr.length;
  let index = 0;
  while (index < directoryLength) {
    const currentDir = dirArr.slice(0, index + 1).join(sep);
    if (!(await isDir(currentDir))) {
      await mkdirPromisify(currentDir);
    }
    index++;
  }
  return true;
}

// 保存代码至目录
const writeFile = promisify(fs.writeFile);
export async function saveCode(file: string, code: string) {
  const filePath = normalize(file).split(sep);
  filePath.pop();
  if (await createDirectory(filePath.join(sep))) {
    return writeFile(file, code);
  }
}

/**
 * 生成常量
 * @param apiName
 */
export function generateConstant(apiName: string): string {
  return apiName.replace(/\./g, '_').replace(/\s/g, '_').toUpperCase();
}

/**
 * 将promise转成callback形式
 * @param promise
 * @param callback
 */
export function promiseToCallback<R>(promise: Promise<R>): Promise<R>;
export function promiseToCallback<R, E = never>(promise: Promise<R>, callback: AsyncResultCallback<R, E>): void;
export function promiseToCallback<R, E = never>(
  promise: Promise<R>,
  callback?: AsyncResultCallback<R, E>
): Promise<R> | void {
  if (typeof callback === 'function') {
    promise.then(
      (response) => {
        callback(null, response);
      },
      (err) => {
        callback(err);
      }
    );
  } else {
    return promise;
  }
}
