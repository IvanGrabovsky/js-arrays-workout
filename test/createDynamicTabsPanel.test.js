import { describe, it, expect } from 'vitest';
import { createDynamicTabsPanel } from '../src/createDynamicTabsPanel.js';

describe('15.28: createDynamicTabsPanel', () => {
  it('test 1', () => {
    const fn = createDynamicTabsPanel;
    const res = (() => { const t = createDynamicTabsPanel([{ id: 'a', label: 'Таб A', content: 'Контент A' }, { id: 'b', label: 'Таб B', content: 'Контент B' }]); t.querySelectorAll('.tab-btn')[1].click(); return t.querySelectorAll('.tab-pane')[1].style.display; })();
    expect(res).toEqual("block");
  });
});
