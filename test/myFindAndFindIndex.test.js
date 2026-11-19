import { describe, it, expect } from 'vitest';
import { myFindAndFindIndex } from '../src/myFindAndFindIndex.js';

describe('10.1: myFindAndFindIndex', () => {
  it('test 1', () => {
    const fn = myFindAndFindIndex;
    const res = myFindAndFindIndex([10, 25, 30, 45], x => x > 20);
    expect(res).toEqual({"item":25,"index":1});
  });
  it('test 2', () => {
    const fn = myFindAndFindIndex;
    const res = myFindAndFindIndex([1, 2, 3], x => x > 99);
    expect(res).toEqual({"item":null,"index":-1});
  });
});
