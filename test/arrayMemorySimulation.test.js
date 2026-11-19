import { describe, it, expect } from 'vitest';
import { arrayMemorySimulation } from '../src/arrayMemorySimulation.js';

describe('1.9: arrayMemorySimulation', () => {
  it('test 1', () => {
    const fn = arrayMemorySimulation;
    const res = arrayMemorySimulation(1000, 0, 8);
    expect(res).toEqual(1000);
  });
  it('test 2', () => {
    const fn = arrayMemorySimulation;
    const res = arrayMemorySimulation(1000, 3, 8);
    expect(res).toEqual(1024);
  });
  it('test 3', () => {
    const fn = arrayMemorySimulation;
    const res = arrayMemorySimulation(2048, -1, 4);
    expect(res).toEqual(null);
  });
});
