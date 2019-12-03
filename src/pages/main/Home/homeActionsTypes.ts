export interface HomeAction {
  type: string;
  value?: any;
};

export const HomeActionsTypes = {
  COMPLETE: 'COMPLETE',
  FIRE_SNACK: 'FIRE_SNACK',
  SENDING: 'SENDING',
  SET_TAB: 'SET_TAB'
}