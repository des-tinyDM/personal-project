const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    url: '',
    mortgage: 0,
    rent: 0,
    propertyList: []
}

const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_STATE = "UPDATE_STATE";
const UPDATE_ZIP = "UPDATE_ZIP";
const UPDATE_URL = "UPDATE_URL";
const UPDATE_MORTGAGE = "UPDATE_MORTGAGE";
const UPDATE_RENT = "UPDATE_RENT";
const UPDATE_PROPERTY_LIST = "UPDATE_PROPERTY_LIST"

function reducer( state = initialState, action ) {
    console.log('REDUCER HIT: Action ->', action);

    switch(action.type) {
        case UPDATE_NAME:
            return Object.assign( {}, state, {name: action.payload});
        case UPDATE_ADDRESS:
            return Object.assign( {}, state, {address: action.payload});
        case UPDATE_CITY:
            return Object.assign( {}, state, {city: action.payload});
        case UPDATE_STATE:
            return Object.assign( {}, state, {state: action.payload});
        case UPDATE_ZIP:
            return Object.assign( {}, state, {zip: action.payload});
        case UPDATE_URL:
            return Object.assign( {}, state, {url: action.payload});
        case UPDATE_MORTGAGE:
            return Object.assign( {}, state, {mortgage: action.payload});
        case UPDATE_RENT:
            return Object.assign( {}, state, {rent: action.payload});
        default: return state;
    }   
}

export function updateName( name ){
    return {
        type: UPDATE_NAME,
        payload: name
    };
}
export function updateAddress( address ){
    return {
        type: UPDATE_ADDRESS,
        payload: address
    };
}
export function update( city ){
    return {
        type: UPDATE_CITY,
        payload: city 
    };
}
export function update( state ){
    return {
        type: UPDATE_STATE,
        payload: state
    };
}
export function update( zip ){
    return {
        type: UPDATE_ZIP,
        payload: zip
    };
}
export function update( url ){
    return {
        type: UPDATE_URL,
        payload: url
    };
}
export function update( mortgage ){
    return {
        type: UPDATE_MORTGAGE,
        payload: mortgage
    };
}
export function update( rent ){
    return {
        type: UPDATE_RENT,
        payload: rent
    };
}

export default reducer