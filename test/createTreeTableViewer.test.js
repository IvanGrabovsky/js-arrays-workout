import { describe, it, expect } from 'vitest';
import { createTreeTableViewer } from '../src/createTreeTableViewer.js';

describe('16.33: createTreeTableViewer', () => {
  it('test 1', () => {
    const fn = createTreeTableViewer;
    const res = (() => { const t = createTreeTableViewer([{ name: 'app', children: [{ name: 'main.js' }] }]); return [t.children.length, t.children[1].style.paddingLeft]; })();
    expect(res).toEqual([2,"20px"]);
  });
});
