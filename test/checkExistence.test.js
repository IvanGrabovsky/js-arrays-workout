import { describe, it, expect } from 'vitest';
import { checkExistence } from '../src/checkExistence.js';

describe('4.5: checkExistence', () => {
  it('test 1', () => {
    const fn = checkExistence;
    const res = checkExistence(["admin", "manager", "support"], "admin");
    expect(res).toEqual(true);
  });
  it('test 2', () => {
    const fn = checkExistence;
    const res = checkExistence(["admin", "manager"], "guest");
    expect(res).toEqual(false);
  });
  it('test 3', () => {
    const fn = checkExistence;
    const res = checkExistence([], "x");
    expect(res).toEqual(false);
  });
});
