export interface IBaseComponent {
  children?: JSX.Element | JSX.Element[] | string | string[];
  className?: string;
}
export interface IService<TResponse> {
  getAll?(): Promise<TResponse>;
}
