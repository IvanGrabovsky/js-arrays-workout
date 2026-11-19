import { describe, it, expect } from 'vitest';
import { renderSimpleList } from '../src/renderSimpleList.js';

describe('15.1: renderSimpleList', () => {
  it('test 1', () => {
    const fn = renderSimpleList;
    const res = (() => { const ul = renderSimpleList(['Яблуко', 'Банан']); return [ul.children.length, ul.children[0].textContent, ul.children[1].textContent]; })();
    expect(res).toEqual([2,"Яблуко","Банан"]);
  });
  it('test 2', () => {
    const fn = renderSimpleList;
    const res = renderSimpleList([]).children.length;
    expect(res).toEqual(0);
  });
});
