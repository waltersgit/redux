const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
};
//Reducer
const rootReducr = (state = initialState, action) => {
    if(action.type === 'INC_COUNTER'){
        return{
            ...state,
            counter: state.counter + 1
        };
    }
    if(action.type === 'ADD_COUNTER'){
        return{
            ...state,
            counter: state.counter + action.value
        };
    }
    return state;
}
//Store
const store = createStore(rootReducr);
console.log(store.getState());

//Subscription 創建store後做訂閱，當store值有改變，將自動觸發
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

//Dispatching Action  INC_COUNTER自訂義，全大寫具描述性
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER',value: 10});
console.log(store.getState());

