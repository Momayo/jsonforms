import { ThunkAction } from 'redux-thunk';
import { getData } from './reducers/index';

export const INIT = 'INIT';
export const UPDATE_DATA = 'UPDATE';
export const UPDATE_UI = 'UPDATE_UI';
export const VALIDATE = 'VALIDATE';
export const SHOW = 'SHOW';
export const HIDE = 'HIDE';
export const ENABLE = 'ENABLE';
export const DISABLE = 'DISABLE';

// TODO: fix typings
export const update =
  (path: string, updater: (any) => any): ThunkAction<void, any, void> =>
    (dispatch, getState) => {
      dispatch(
        {
          type: UPDATE_DATA,
          path,
          updater
        }
      );
      dispatch(
        {
          type: VALIDATE,
          data: getData(getState())
        }
      );
    };

export const validate = () => (dispatch, getState) => {
  dispatch({
    type: VALIDATE,
    data: getData(getState())
  });
};