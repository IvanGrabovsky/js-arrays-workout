import { describe, it, expect } from 'vitest';
import { detectSecurityAnomaly } from '../src/detectSecurityAnomaly.js';

describe('10.2: detectSecurityAnomaly', () => {
  it('test 1', () => {
    const fn = detectSecurityAnomaly;
    const res = detectSecurityAnomaly([{ id: 1, level: "INFO", statusCode: 200 }, { id: 2, level: "ERROR", statusCode: 502 }]);
    expect(res).toEqual({"foundLog":{"id":2,"level":"ERROR","statusCode":502},"logIndex":1});
  });
  it('test 2', () => {
    const fn = detectSecurityAnomaly;
    const res = detectSecurityAnomaly([{ id: 1, level: "INFO", statusCode: 200 }]);
    expect(res).toEqual(null);
  });
});
