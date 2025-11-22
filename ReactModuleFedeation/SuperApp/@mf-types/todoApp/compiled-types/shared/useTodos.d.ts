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
export declare const useTodos: () => UseTodosReturn;
export {};
