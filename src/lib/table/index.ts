import { Tweet, TwitterApi } from '../twitter-api-wrapper';

export * from './table.component';

export interface Column<T> {
    id: string;
    property: keyof T;
    displayName: string;
}

export interface Row<T> {
    data: T;
}

export interface Table<T> {
    componentId: string;
    columns: Column<T>[];
    rows: Row<T>[];
}
