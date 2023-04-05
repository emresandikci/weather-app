export type { default as ICurrentWeatherModel } from './current';
export type { default as IForecastModel } from './forecast';

export interface IBaseComponent {
  children?: JSX.Element | JSX.Element[] | string | string[];
  className?: string;
}
export interface IService<TResponse> {
  getAll?(q: object): Promise<TResponse>;
}
