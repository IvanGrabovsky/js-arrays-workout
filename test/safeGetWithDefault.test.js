import { describe, it, expect } from 'vitest';
import { safeGetWithDefault } from '../src/safeGetWithDefault.js';

describe('2.6: safeGetWithDefault', () => {
  it('test 1', () => {
    const fn = safeGetWithDefault;
    const res = safeGetWithDefault(["admin", "editor"], 1, "guest");
    expect(res).toEqual("editor");
  });
  it('test 2', () => {
    const fn = safeGetWithDefault;
    const res = safeGetWithDefault(["admin", "editor"], 5, "guest");
    expect(res).toEqual("guest");
  });
  it('test 3', () => {
    const fn = safeGetWithDefault;
    const res = safeGetWithDefault([], 0, "empty");
    expect(res).toEqual("empty");
  });
});
