import { describe, it, expect } from 'vitest';
import { createBreadcrumbNav } from '../src/createBreadcrumbNav.js';

describe('15.8: createBreadcrumbNav', () => {
  it('test 1', () => {
    const fn = createBreadcrumbNav;
    const res = (() => { const b = createBreadcrumbNav([{ label: 'Головна', url: '/' }, { label: 'Каталог', url: '/shop' }, { label: 'Ноутбук', url: '/shop/1' }]); return [b.querySelectorAll('a').length, b.querySelector('.current').textContent]; })();
    expect(res).toEqual([2,"Ноутбук"]);
  });
});
