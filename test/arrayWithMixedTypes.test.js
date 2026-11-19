import { describe, it, expect } from 'vitest';
import { arrayWithMixedTypes } from '../src/arrayWithMixedTypes.js';

describe('1.8: arrayWithMixedTypes', () => {
  it('test 1', () => {
    const fn = arrayWithMixedTypes;
    const res = arrayWithMixedTypes(101, "Іван", true, ["admin", "dev"]);
    expect(res).toEqual([101,"Іван",true,["admin","dev"]]);
  });
  it('test 2', () => {
    const fn = arrayWithMixedTypes;
    const res = arrayWithMixedTypes(202, "Анна", false, []);
    expect(res).toEqual([202,"Анна",false,[]]);
  });
});
