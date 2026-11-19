import { describe, it, expect } from 'vitest';
import { createChipsAutocomplete } from '../src/createChipsAutocomplete.js';

describe('15.23: createChipsAutocomplete', () => {
  it('test 1', () => {
    const fn = createChipsAutocomplete;
    const res = (() => { const ac = createChipsAutocomplete(['HTML', 'CSS', 'JS']); ac.select('JS'); ac.select('JS'); ac.select('CSS'); return ac.getSelected(); })();
    expect(res).toEqual(["JS","CSS"]);
  });
});
