import { describe, it, expect } from 'vitest';
import { createKanbanColumns } from '../src/createKanbanColumns.js';

describe('16.9: createKanbanColumns', () => {
  it('test 1', () => {
    const fn = createKanbanColumns;
    const res = (() => { const b = createKanbanColumns([{ title: 'В роботі', tasks: ['Тести', 'Фікс'] }]); return [b.children.length, b.querySelector('.badge').textContent, b.querySelectorAll('.kanban-task').length]; })();
    expect(res).toEqual([1,"2",2]);
  });
});
