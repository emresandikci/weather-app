export type { default as ICurrentModel } from './current';
export type { default as IForecastModel } from './forecast';
export type { default as IPhotoModel } from './photo';
export interface IBaseComponent {
  children?: JSX.Element | JSX.Element[] | string | string[];
  className?: string;
}
export interface IService<TResponse> {
  getAll?(q: object): Promise<TResponse>;
}
