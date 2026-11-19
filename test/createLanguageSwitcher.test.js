import { describe, it, expect } from 'vitest';
import { createLanguageSwitcher } from '../src/createLanguageSwitcher.js';

describe('15.34: createLanguageSwitcher', () => {
  it('test 1', () => {
    const fn = createLanguageSwitcher;
    const res = (() => { let sel = ''; const sw = createLanguageSwitcher([{ code: 'ua', label: '🇺🇦' }, { code: 'en', label: '🇬🇧' }], 'ua', c => sel = c); sw.children[1].click(); return sel; })();
    expect(res).toEqual("en");
  });
});
