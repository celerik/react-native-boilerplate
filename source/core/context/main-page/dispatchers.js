import { mainPageActions } from './context';

const { SIMPLE_STATE } = mainPageActions;

export const changeState = (state) =>
({
    type: SIMPLE_STATE,
    payload: state
});