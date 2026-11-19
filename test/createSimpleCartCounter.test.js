import { describe, it, expect } from 'vitest';
import { createSimpleCartCounter } from '../src/createSimpleCartCounter.js';

describe('15.33: createSimpleCartCounter', () => {
  it('test 1', () => {
    const fn = createSimpleCartCounter;
    const res = (() => { const c = createSimpleCartCounter(1, 1, 5); c.querySelectorAll('button')[1].click(); return c.querySelector('.qty-val').textContent; })();
    expect(res).toEqual("2");
  });
});
