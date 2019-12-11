
export * from './user';

export interface Result<T>{
    code: number;
    msg: string;
    data?:T;
}