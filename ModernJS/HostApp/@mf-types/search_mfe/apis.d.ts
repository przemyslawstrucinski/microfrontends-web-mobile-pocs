
    export type RemoteKeys = 'search_mfe/SearchWidget';
    type PackageType<T> = T extends 'search_mfe/SearchWidget' ? typeof import('search_mfe/SearchWidget') :any;