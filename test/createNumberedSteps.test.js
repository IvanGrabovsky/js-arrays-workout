import { describe, it, expect } from 'vitest';
import { createNumberedSteps } from '../src/createNumberedSteps.js';

describe('15.16: createNumberedSteps', () => {
  it('test 1', () => {
    const fn = createNumberedSteps;
    const res = (() => { const s = createNumberedSteps(['Авторизація', 'Оплата', 'Готово'], 1); return [s.children[0].className, s.children[1].className, s.children[2].className]; })();
    expect(res).toEqual(["step-item completed","step-item active","step-item pending"]);
  });
});
