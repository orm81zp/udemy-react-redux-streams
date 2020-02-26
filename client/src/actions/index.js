export const ACTIONS = {
  SIGN_IN: 'SIGN_IN',
  SIGN_OUT: 'SIGN_OUT'
}

export const signIn = () => {
  return {
    type: ACTIONS.SIGN_IN
  }
};

export const signOut = () => {
  return {
    type: ACTIONS.SIGN_OUT
  }
};
