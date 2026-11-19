import { describe, it, expect } from 'vitest';
import { createStepProgressBar } from '../src/createStepProgressBar.js';

describe('15.26: createStepProgressBar', () => {
  it('test 1', () => {
    const fn = createStepProgressBar;
    const res = (() => { const p = createStepProgressBar(10, 7); return p.querySelector('.progress-label').textContent; })();
    expect(res).toEqual("7 з 10 завершено (70%)");
  });
});
