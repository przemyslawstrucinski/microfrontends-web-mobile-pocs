import { useState, useEffect } from 'react';

// Mock data - works without API (perfect for mobile!)
const MOCK_TODOS = [
  { id: '1', title: 'Learn Module Federation 🚀', completed: true },
  { id: '2', title: 'Build Microfrontends', completed: true },
  { id: '3', title: 'Deploy to Production', completed: false },
];

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

interface UseTodosReturn {
  todos: Todo[];
  loading: boolean;
  error: string | null;
  addTodo: (title: string) => Promise<Todo | undefined>;
  toggleTodo: (id: string) => Promise<void>;
  deleteTodo: (id: string) => Promise<void>;
  refetch: () => Promise<void>;
}

export const useTodos = (): UseTodosReturn => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTodos = async (): Promise<void> => {
    try {
      setLoading(true);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 300));
      setTodos(MOCK_TODOS);
      setError(null);
    } catch (err) {
      setError('Failed to fetch todos');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (title: string): Promise<Todo | undefined> => {
    try {
      const newTodo: Todo = {
        id: Date.now().toString(),
        title,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      return newTodo;
    } catch (err) {
      setError('Failed to add todo');
      console.error(err);
      return undefined;
    }
  };

  const toggleTodo = async (id: string): Promise<void> => {
    try {
      setTodos(todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ));
    } catch (err) {
      setError('Failed to toggle todo');
      console.error(err);
    }
  };

  const deleteTodo = async (id: string): Promise<void> => {
    try {
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (err) {
      setError('Failed to delete todo');
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return {
    todos,
    loading,
    error,
    addTodo,
    toggleTodo,
    deleteTodo,
    refetch: fetchTodos,
  };
};
