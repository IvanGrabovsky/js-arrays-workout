import { describe, it, expect } from 'vitest';
import { myFlatAndFlatMap } from '../src/myFlatAndFlatMap.js';

describe('13.1: myFlatAndFlatMap', () => {
  it('test 1', () => {
    const fn = myFlatAndFlatMap;
    const res = myFlatAndFlatMap([[1, 2], [3], 4], x => Array.isArray(x) ? x.map(n => n * 2) : [x * 2]);
    expect(res).toEqual({"flatResult":[1,2,3,4],"flatMapResult":[2,4,6,8]});
  });
});
