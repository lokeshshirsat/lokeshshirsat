const redux = require('redux');

const createStore = redux.createStore;

const initialState = {
    counter: 0
}

// Reducer

const rootReducer = (state = initialState, action) => {
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter : state.counter + 1
        }
    }

    if (action.type === 'SUB_COUNTER') {
        return {
            ...state,
            counter : state.counter - 1
        }
    }

    if (action.type === 'VALUE_COUNTER') {
        return {
            ...state,
            counter : state.counter + action.value
        }
    }
    return state;
}

//  Store
    const store = createStore(rootReducer);
    console.log(store.getState())

    store.subscribe(() => {
        console.log('subscription',store.getState())
    })

// Dispacting Action
store.dispatch({type:'ADD_COUNTER'});
store.dispatch({type:'SUB_COUNTER'});
store.dispatch({type:'VALUE_COUNTER', value: 20});
console.log(store.getState())

//  Subscription
