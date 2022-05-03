import { csrfFetch } from "./csrf";

const GET_ALL_BUSINESS = "/business/getAllbusinessess"
const GET_ONE_BUSINESS = "/business/oneBusiness"
const ADD_BUSINESS = "/business/new"

const loadBusiness = (businessess) => {
    return {
        type : GET_ALL_BUSINESS,
        businessess
    }
}


const oneBusiness = (business) => {
    return {
        type: GET_ONE_BUSINESS,
        business
    }
}


const addBusiness = (business) => {
    return {
        type:ADD_BUSINESS,
        business
    }
}


export const writeBusiness = (payload) => async (dispatch) => {
    const response = await csrfFetch("api/business/",{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body : JSON.stringify(payload)
    });

    if(response.ok){
        const busniess = await response.json()
        dispatch(addBusiness(busniess))
        return busniess;
    }

}


export const getOneBusiness = (businessId) => async (dispatch) => {
    const response = await csrfFetch(`/api/business/${businessId}`, {
      method: "GET",
    });
    const business = await response.json();
    dispatch(oneBusiness(business));
    return business;
  };



export const getAllbusinessess = () => async (dispatch) => {
    const response = await fetch("/api/business")

    if(response.ok){
        const data = await response.json()

        dispatch(loadBusiness(data))
        return data;
    }
}

const initialState = {};

const businessReducer = (state = initialState, action) => {
    // console.log(state)
    switch (action.type){
        case GET_ALL_BUSINESS:{
            const newState = {};
            action.businessess.forEach(business =>(newState[business.id]=business));
            console.log(newState);
            return newState
        }
        case ADD_BUSINESS:
        case GET_ONE_BUSINESS:
        default :
            return state
    }
}

export default businessReducer;
