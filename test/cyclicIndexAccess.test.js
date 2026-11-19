import { describe, it, expect } from 'vitest';
import { cyclicIndexAccess } from '../src/cyclicIndexAccess.js';

describe('2.9: cyclicIndexAccess', () => {
  it('test 1', () => {
    const fn = cyclicIndexAccess;
    const res = cyclicIndexAccess(["Пн", "Вт", "Ср"], 4);
    expect(res).toEqual("Вт");
  });
  it('test 2', () => {
    const fn = cyclicIndexAccess;
    const res = cyclicIndexAccess(["Пн", "Вт", "Ср"], 0);
    expect(res).toEqual("Пн");
  });
  it('test 3', () => {
    const fn = cyclicIndexAccess;
    const res = cyclicIndexAccess(["Пн", "Вт", "Ср"], -1);
    expect(res).toEqual("Ср");
  });
});
