import { describe, it, expect } from 'vitest';
import { createCarouselIndicators } from '../src/createCarouselIndicators.js';

describe('15.12: createCarouselIndicators', () => {
  it('test 1', () => {
    const fn = createCarouselIndicators;
    const res = (() => { const d = createCarouselIndicators(4, 2); return [d.children.length, d.children[2].classList.contains('active'), d.children[0].classList.contains('active')]; })();
    expect(res).toEqual([4,true,false]);
  });
});
