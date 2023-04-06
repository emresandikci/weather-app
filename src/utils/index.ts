export { default as routes } from './routes';
export { default as http } from './http';

export enum HTTP_STATUS {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}
export enum QUERY_KEY_TYPES {
  current = 'current',
  forecast = 'forecast',
  photo = 'photo',
}

export enum SIZES {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}

export const DEFAULT_BACKGROUND =
  'https://images.pexels.com/photos/6249515/pexels-photo-6249515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
