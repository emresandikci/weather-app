export interface IAppRoute {
  [key: string]: {
    name: string;
    path: string;
    isPrivate: boolean;
  };
}
const routes: IAppRoute = {
  home: {
    name: 'home',
    path: '/',
    isPrivate: false,
  },
};

export default routes;
