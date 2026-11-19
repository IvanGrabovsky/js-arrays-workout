import { describe, it, expect } from 'vitest';
import { createSurveyMatrixQuestion } from '../src/createSurveyMatrixQuestion.js';

describe('16.29: createSurveyMatrixQuestion', () => {
  it('test 1', () => {
    const fn = createSurveyMatrixQuestion;
    const res = (() => { let ans = null; const s = createSurveyMatrixQuestion(['Зручність'], ['1', '2', '3'], (q, o) => ans = { q, o }); s.querySelector('input').click(); return ans; })();
    expect(res).toEqual({"q":0,"o":"1"});
  });
});
