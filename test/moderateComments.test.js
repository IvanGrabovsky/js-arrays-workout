import { describe, it, expect } from 'vitest';
import { moderateComments } from '../src/moderateComments.js';

describe('9.3: moderateComments', () => {
  it('test 1', () => {
    const fn = moderateComments;
    const res = moderateComments([{ text: "Чудовий курс!", isSpam: false, rating: 5 }, { text: "Купи крипту", isSpam: true, rating: 1 }], ["крипту"]);
    expect(res).toEqual([{"text":"Чудовий курс!","isSpam":false,"rating":5}]);
  });
});
