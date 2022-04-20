import { camelCase, isArray, isObject, snakeCase, transform } from 'lodash';

export const camelize = (obj: Record<string, unknown>) => {
  return transform(
    obj,
    (acc: Record<string, unknown>, value: Record<string, unknown> | unknown, key, target) => {
      const camelKey = isArray(target) ? key : camelCase(key.toString());
      acc[camelKey] = isObject(value) ? camelize(value as Record<string, unknown>) : value;
    },
  );
};

export const snakeize = (obj: Record<string, unknown>) => {
  return transform(
    obj,
    (acc: Record<string, unknown>, value: Record<string, unknown> | unknown, key, target) => {
      const camelKey = isArray(target) ? key : snakeCase(key.toString());
      acc[camelKey] = isObject(value) ? snakeize(value as Record<string, unknown>) : value;
    },
  );
};
