import { describe, it, expect } from 'vitest';
import { normalizeCoordinates } from '../src/normalizeCoordinates.js';

describe('8.4: normalizeCoordinates', () => {
  it('test 1', () => {
    const fn = normalizeCoordinates;
    const res = normalizeCoordinates([{ lat: 50.4501, lng: 30.5234 }, { lat: 0, lng: 20.12 }]);
    expect(res).toEqual([{"hash":"[50.4501,30.5234]","isEquator":false},{"hash":"[0.0000,20.1200]","isEquator":true}]);
  });
});
