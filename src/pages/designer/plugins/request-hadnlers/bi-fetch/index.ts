import { RuntimeOptionsConfig } from '@alilc/lowcode-datasource-types';

import request from 'universal-request';
import { RequestOptions, AsObject } from 'universal-request/lib/types';

// config 留着扩展
export function createBiFetchHandler(config?: Record<string, unknown>) {
  // eslint-disable-next-line space-before-function-paren
  return async function(options: RuntimeOptionsConfig) {
    const requestConfig: RequestOptions = {
      ...options,
      url: options.uri,
      method: options.method as RequestOptions['method'],
      data: options.params as AsObject,
      headers: options.headers as AsObject,
      ...config,
    };
    console.log('biFetch createFetchHandler options', options);
    const response = await request(requestConfig);
    console.log('biFetch createFetchHandler response', response);
    return response;
  };
}
