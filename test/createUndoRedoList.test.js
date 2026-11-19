import { describe, it, expect } from 'vitest';
import { createUndoRedoList } from '../src/createUndoRedoList.js';

describe('15.30: createUndoRedoList', () => {
  it('test 1', () => {
    const fn = createUndoRedoList;
    const res = (() => { const l = createUndoRedoList(); l.push('A'); l.push('B'); l.undo(); const afterUndo = l.getList(); l.redo(); const afterRedo = l.getList(); return { afterUndo, afterRedo }; })();
    expect(res).toEqual({"afterUndo":["A"],"afterRedo":["A","B"]});
  });
});
