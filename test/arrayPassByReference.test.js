import { describe, it, expect } from 'vitest';
import { arrayPassByReference } from '../src/arrayPassByReference.js';

describe('1.5: arrayPassByReference', () => {
  it('test 1', () => {
    const fn = arrayPassByReference;
    const res = arrayPassByReference([10, 20], 99);
    expect(res).toEqual([99,20]);
  });
  it('test 2', () => {
    const fn = arrayPassByReference;
    const res = arrayPassByReference(["a", "b"], "z");
    expect(res).toEqual(["z","b"]);
  });
  it('test 3', () => {
    const fn = arrayPassByReference;
    const res = arrayPassByReference([], 5);
    expect(res).toEqual([]);
  });
});
