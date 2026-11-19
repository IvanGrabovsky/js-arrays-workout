import { describe, it, expect } from 'vitest';
import { generateQueryString } from '../src/generateQueryString.js';

describe('12.3: generateQueryString', () => {
  it('test 1', () => {
    const fn = generateQueryString;
    const res = generateQueryString([{ key: "page", value: 1 }, { key: "sort", value: "desc" }]);
    expect(res).toEqual("page=1&sort=desc");
  });
  it('test 2', () => {
    const fn = generateQueryString;
    const res = generateQueryString([]);
    expect(res).toEqual("");
  });
});
