import { describe, it, expect } from 'vitest';
import { getAtNegativeOffset } from '../src/getAtNegativeOffset.js';

describe('2.2: getAtNegativeOffset', () => {
  it('test 1', () => {
    const fn = getAtNegativeOffset;
    const res = getAtNegativeOffset(["a", "b", "c", "d"], -1);
    expect(res).toEqual("d");
  });
  it('test 2', () => {
    const fn = getAtNegativeOffset;
    const res = getAtNegativeOffset(["a", "b", "c", "d"], -2);
    expect(res).toEqual("c");
  });
  it('test 3', () => {
    const fn = getAtNegativeOffset;
    const res = getAtNegativeOffset(["a", "b"], -5);
    expect(res).toEqual(undefined);
  });
});
