import { describe, it, expect } from 'vitest';
import { getFirstAndLast } from '../src/getFirstAndLast.js';

describe('2.1: getFirstAndLast', () => {
  it('test 1', () => {
    const fn = getFirstAndLast;
    const res = getFirstAndLast([10, 20, 30, 40]);
    expect(res).toEqual({"first":10,"last":40,"length":4});
  });
  it('test 2', () => {
    const fn = getFirstAndLast;
    const res = getFirstAndLast(["єдиний"]);
    expect(res).toEqual({"first":"єдиний","last":"єдиний","length":1});
  });
  it('test 3', () => {
    const fn = getFirstAndLast;
    const res = getFirstAndLast([]);
    expect(res).toEqual({"first":null,"last":null,"length":0});
  });
});
