export type TRoute = {
  path: string;
  name: string;
  component: () => JSX.Element;
  exact: boolean;
};
