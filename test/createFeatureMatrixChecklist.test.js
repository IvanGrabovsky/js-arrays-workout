import { describe, it, expect } from 'vitest';
import { createFeatureMatrixChecklist } from '../src/createFeatureMatrixChecklist.js';

describe('15.27: createFeatureMatrixChecklist', () => {
  it('test 1', () => {
    const fn = createFeatureMatrixChecklist;
    const res = (() => { const c = createFeatureMatrixChecklist([{ name: 'SSL', included: true }, { name: 'Support', included: false }]); return [c.children[0].className, c.children[1].className]; })();
    expect(res).toEqual(["feature-enabled","feature-disabled"]);
  });
});
