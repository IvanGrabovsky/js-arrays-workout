import { describe, it, expect } from 'vitest';
import { mySomeAndEvery } from '../src/mySomeAndEvery.js';

describe('11.1: mySomeAndEvery', () => {
  it('test 1', () => {
    const fn = mySomeAndEvery;
    const res = mySomeAndEvery([2, 4, 6], x => x % 2 === 0);
    expect(res).toEqual({"someResult":true,"everyResult":true});
  });
  it('test 2', () => {
    const fn = mySomeAndEvery;
    const res = mySomeAndEvery([2, 3, 6], x => x % 2 === 0);
    expect(res).toEqual({"someResult":true,"everyResult":false});
  });
  it('test 3', () => {
    const fn = mySomeAndEvery;
    const res = mySomeAndEvery([1, 3, 5], x => x % 2 === 0);
    expect(res).toEqual({"someResult":false,"everyResult":false});
  });
});
