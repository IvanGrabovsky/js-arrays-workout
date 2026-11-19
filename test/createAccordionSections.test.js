import { describe, it, expect } from 'vitest';
import { createAccordionSections } from '../src/createAccordionSections.js';

describe('15.13: createAccordionSections', () => {
  it('test 1', () => {
    const fn = createAccordionSections;
    const res = (() => { const a = createAccordionSections([{ title: 'Питання 1', content: 'Відповідь 1' }]); a.querySelector('.accordion-header').click(); return a.children[0].classList.contains('open'); })();
    expect(res).toEqual(true);
  });
});
