import { describe, it, expect } from 'vitest';
import { validateFormFields } from '../src/validateFormFields.js';

describe('11.2: validateFormFields', () => {
  it('test 1', () => {
    const fn = validateFormFields;
    const res = validateFormFields([{ field: "email", isValid: true }, { field: "password", isValid: true }]);
    expect(res).toEqual({"isValidForm":true,"hasErrors":false});
  });
  it('test 2', () => {
    const fn = validateFormFields;
    const res = validateFormFields([{ field: "email", isValid: true }, { field: "password", isValid: false }]);
    expect(res).toEqual({"isValidForm":false,"hasErrors":true});
  });
});
