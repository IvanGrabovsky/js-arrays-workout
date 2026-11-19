import { describe, it, expect } from 'vitest';
import { createWithNewArray } from '../src/createWithNewArray.js';

describe('1.2: createWithNewArray', () => {
  it('test 1', () => {
    const fn = createWithNewArray;
    const res = createWithNewArray(3, 0);
    expect(res).toEqual([0,0,0]);
  });
  it('test 2', () => {
    const fn = createWithNewArray;
    const res = createWithNewArray(2, "test");
    expect(res).toEqual(["test","test"]);
  });
  it('test 3', () => {
    const fn = createWithNewArray;
    const res = createWithNewArray(0, "x");
    expect(res).toEqual([]);
  });
});
