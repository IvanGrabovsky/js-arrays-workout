import { describe, it, expect } from 'vitest';
import { printWithIndices } from '../src/printWithIndices.js';

describe('3.7: printWithIndices', () => {
  it('test 1', () => {
    const fn = printWithIndices;
    const res = printWithIndices(["HTML", "CSS", "JS"]);
    expect(res).toEqual(["0: HTML","1: CSS","2: JS"]);
  });
  it('test 2', () => {
    const fn = printWithIndices;
    const res = printWithIndices([]);
    expect(res).toEqual([]);
  });
});
