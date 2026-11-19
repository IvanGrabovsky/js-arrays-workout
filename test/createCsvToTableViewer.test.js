import { describe, it, expect } from 'vitest';
import { createCsvToTableViewer } from '../src/createCsvToTableViewer.js';

describe('16.13: createCsvToTableViewer', () => {
  it('test 1', () => {
    const fn = createCsvToTableViewer;
    const res = (() => { const t = createCsvToTableViewer('name,age\nІван,20\nМарія,22'); return [t.querySelectorAll('th').length, t.querySelectorAll('tbody tr').length]; })();
    expect(res).toEqual([2,2]);
  });
});
