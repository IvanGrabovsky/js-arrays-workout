import { describe, it, expect } from 'vitest';
import { anonymizeUserData } from '../src/anonymizeUserData.js';

describe('8.3: anonymizeUserData', () => {
  it('test 1', () => {
    const fn = anonymizeUserData;
    const res = anonymizeUserData([{ id: 1, fullName: "Тарас Шевченко", email: "taras@ukr.net", phone: "+380501234567" }]);
    expect(res).toEqual([{"id":1,"maskedName":"Тарас Ш.","email":"t***@ukr.net","phone":"+380******67"}]);
  });
});
