
    export type RemoteKeys = 'todoApp/TodoApp';
    type PackageType<T> = T extends 'todoApp/TodoApp' ? typeof import('todoApp/TodoApp') :any;