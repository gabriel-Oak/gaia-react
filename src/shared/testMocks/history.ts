
export const historyMock: historyTesting = {
  goBack: () => {},
  push: () => {}
};

export const matchMock = {
  isExact: true,
  params: {},
  path: '/',
  url: '/hgfd'
};

export interface historyTesting {
  goBack: Function;
  push: Function;
}