import { Injectable } from '@nestjs/common';

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

@Injectable()
export class TodoService {
  private todos: Todo[] = [
    { id: '1', title: 'Learn Module Federation', completed: true },
    { id: '2', title: 'Build Microfrontends', completed: false },
    { id: '3', title: 'Create Microservices', completed: false },
  ];

  findAll(): Todo[] {
    return this.todos;
  }

  create(title: string): Todo {
    const todo: Todo = {
      id: Date.now().toString(),
      title,
      completed: false,
    };
    this.todos.push(todo);
    return todo;
  }

  toggle(id: string): Todo {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
    return todo;
  }

  delete(id: string): boolean {
    const index = this.todos.findIndex(t => t.id === id);
    if (index > -1) {
      this.todos.splice(index, 1);
      return true;
    }
    return false;
  }
}

