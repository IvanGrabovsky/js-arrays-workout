import { describe, it, expect } from 'vitest';
import { stackPushPop } from '../src/stackPushPop.js';

describe('4.1: stackPushPop', () => {
  it('test 1', () => {
    const fn = stackPushPop;
    const res = stackPushPop([{ action: "push", item: "file1" }, { action: "push", item: "file2" }, { action: "pop" }, { action: "push", item: "file3" }]);
    expect(res).toEqual({"currentStack":["file1","file3"],"history":["file2"]});
  });
  it('test 2', () => {
    const fn = stackPushPop;
    const res = stackPushPop([]);
    expect(res).toEqual({"currentStack":[],"history":[]});
  });
});
