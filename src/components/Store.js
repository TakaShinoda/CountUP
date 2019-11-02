import { createStore } from 'redux';

//ステート
const state_value = {
    count: 0,
};

// レデューサー
function countReducer(state = state_value, action) {
    switch (action.type) {
        case 'INCREMENT':
        return {
            count:state.count + 1,
        };
        default:
        return state;
    }
}



//ストア作成しエクスポート
export default createStore(countReducer);
