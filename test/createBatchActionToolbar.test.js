import { describe, it, expect } from 'vitest';
import { createBatchActionToolbar } from '../src/createBatchActionToolbar.js';

describe('16.34: createBatchActionToolbar', () => {
  it('test 1', () => {
    const fn = createBatchActionToolbar;
    const res = (() => { let act = null; const b = createBatchActionToolbar(3, a => act = a); b.querySelector('button').click(); return [b.classList.contains('hidden'), act]; })();
    expect(res).toEqual([false,"delete"]);
  });
});
