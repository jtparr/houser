const initialState = {
    houseList: [],
    name: '',
    address: '',
    city: '',
    propertystate: '',
    zipcode: ''
}

const UPDATE_HOUSELIST = 'UPDATE_HOUSELIST';
const UPDATE_NAME = 'UPDATE_NAME';
const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_PROPERTYSTATE = 'UPDATE_PROPERTYSTATE';
const UPDATE_ZIPCODE = 'UPDATE_ZIPCODE';

function reducer (state = initialState, action) {
    switch (action.type) {
        case UPDATE_HOUSELIST:
        let updatedHouseList = initialState.houseList.push(action.payload)
        return {...state, houseList: updatedHouseList}

        case UPDATE_NAME:
        return {...state, name: action.payload}

        case UPDATE_ADDRESS:
        return {...state, address: action.payload}

        case UPDATE_CITY:
        return {...state, address: action.payload}

        case UPDATE_PROPERTYSTATE:
        return {...state, propertystate: action.payload}

        case UPDATE_ZIPCODE:
        return {...state, zipcode: action.payload}

        default:
        return state;
    }
}

export function updateHouseList (houseList) {
    return {
        type: UPDATE_HOUSELIST,
        payload: houseList
    }
}
export function updateName (name) {
    return {
        type: UPDATE_NAME,
        payload: name
    }
}
export function updateAddress (address) {
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}
export function updateCity (city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}
export function updatePropertyState (propertystate) {
    return {
        type: UPDATE_PROPERTYSTATE,
        payload: propertystate
    }
}
export function updateZipcode (zipcode) {
    return {
        type: UPDATE_ZIPCODE,
        payload: zipcode
    }
}