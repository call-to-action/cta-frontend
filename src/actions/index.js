import * as types from './action-types';


export function login(navProps, res) {
  console.log(res);
  return {
    type: types.LOGIN,
    nav:navProps,
    data: res
  };
}