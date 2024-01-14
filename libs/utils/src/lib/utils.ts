export const getUniqueId = () => Math.floor(Math.random() * 100 + 1) + +new Date();

export const getApiResponse = (feature: string) => {
  return {
    feature,
    error: null,
    data: {},
  };
};

export const getApiRequestHeaders = (feature: string) => {
  return {
    token: '123',
    'x-app': feature,
  };
};
