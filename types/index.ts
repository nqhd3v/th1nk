export type TWrapComponent = {
  children: React.ReactNode;
};

export type TServerSideContext = {
  params: Record<string, string | number>;
  query: Record<string, string>;
};
