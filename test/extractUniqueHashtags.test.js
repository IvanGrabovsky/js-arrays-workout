import { describe, it, expect } from 'vitest';
import { extractUniqueHashtags } from '../src/extractUniqueHashtags.js';

describe('13.2: extractUniqueHashtags', () => {
  it('test 1', () => {
    const fn = extractUniqueHashtags;
    const res = extractUniqueHashtags([{ tags: ["#js", "#code"] }, { tags: ["#web", "#js"] }]);
    expect(res).toEqual(["#js","#code","#web"]);
  });
  it('test 2', () => {
    const fn = extractUniqueHashtags;
    const res = extractUniqueHashtags([]);
    expect(res).toEqual([]);
  });
});
