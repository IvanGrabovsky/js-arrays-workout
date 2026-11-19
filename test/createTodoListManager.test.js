import { describe, it, expect } from 'vitest';
import { createTodoListManager } from '../src/createTodoListManager.js';

describe('15.4: createTodoListManager', () => {
  it('test 1', () => {
    const fn = createTodoListManager;
    const res = (() => { const mgr = createTodoListManager(['Завдання 1']); mgr.addTask('Завдання 2'); return mgr.getTasksCount(); })();
    expect(res).toEqual(2);
  });
});
