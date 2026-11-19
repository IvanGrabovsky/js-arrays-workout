import { describe, it, expect } from 'vitest';
import { myForEach } from '../src/myForEach.js';

describe('7.1: myForEach', () => {
  it('test 1', () => {
    const fn = myForEach;
    const res = (() => { const log = []; myForEach([10, 20], (x, i) => log.push(`${i}:${x}`)); return log; })();
    expect(res).toEqual(["0:10","1:20"]);
  });
  it('test 2', () => {
    const fn = myForEach;
    const res = myForEach([], () => {});
    expect(res).toEqual(undefined);
  });
});
