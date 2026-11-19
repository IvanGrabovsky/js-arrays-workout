import { describe, it, expect } from 'vitest';
import { setLastElement } from '../src/setLastElement.js';

describe('2.8: setLastElement', () => {
  it('test 1', () => {
    const fn = setLastElement;
    const res = setLastElement([1, 2, 3], 99);
    expect(res).toEqual([1,2,99]);
  });
  it('test 2', () => {
    const fn = setLastElement;
    const res = setLastElement([], "перший");
    expect(res).toEqual(["перший"]);
  });
});
