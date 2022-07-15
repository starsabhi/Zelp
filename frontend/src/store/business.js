import { csrfFetch } from './csrf';

const GET_ALL_BUSINESS = '/business/getAllbusinessess';
const GET_ONE_BUSINESS = '/business/oneBusiness';
const ADD_BUSINESS = '/business/new';
const EDIT_BUSINESS = '/business/editBusiness';
const DELETE_BUSINESS = '/business/deleteBusiness';

const loadBusiness = (businessess) => {
  return {
    type: GET_ALL_BUSINESS,
    businessess,
  };
};

const oneBusiness = (business) => {
  return {
    type: GET_ONE_BUSINESS,
    business,
  };
};

const addBusiness = (business) => {
  return {
    type: ADD_BUSINESS,
    business,
  };
};

const editBusiness = (business) => {
  return {
    type: EDIT_BUSINESS,
    business,
  };
};

const deleteBusiness = (businessId) => {
  return {
    type: DELETE_BUSINESS,
    businessId,
  };
};

export const removeBusiness = (businessId) => async (dispatch) => {
  const response = await csrfFetch(`/api/business/${businessId}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    const businessId = await response.json();
    dispatch(deleteBusiness(businessId));
  }
};

export const updateBusiness = (business, id) => async (dispatch) => {
  console.log(
    business,
    '*****************ID N BUSINESS*******************',
    id
  );
  const response = await csrfFetch(`/api/business/${id}/edit`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(business),
  });

  if (response.ok) {
    const business = await response.json();
    dispatch(editBusiness(business));
    return business;
  }
};

export const writeBusiness = (payload) => async (dispatch) => {
  const response = await csrfFetch('/api/business/new', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    const busniess = await response.json();
    dispatch(addBusiness(busniess));
    return busniess;
  }
};

export const getOneBusiness = (businessId) => async (dispatch) => {
  const response = await csrfFetch(`/api/business/${businessId}`, {
    method: 'GET',
  });
  const business = await response.json();
  dispatch(oneBusiness(business));
  return business;
};

export const getAllbusinessess = () => async (dispatch) => {
  const response = await fetch('/api/business');

  if (response.ok) {
    const data = await response.json();

    dispatch(loadBusiness(data));
    return data;
  }
};

const initialState = {};

const businessReducer = (state = initialState, action) => {
  // console.log(state)
  switch (action.type) {
    case GET_ALL_BUSINESS: {
      let newState = {};
      action.businessess.forEach(
        (business) => (newState[business.id] = business)
      );
      // console.log(newState);
      return newState;
    }
    case ADD_BUSINESS: {
      let newState = {};
      // console.log(action.business.id,"*######****")
      newState[action.business.id] = action.business;
      // console.log("COMPLETED ******************OR NOT")
      return newState;
    }
    case GET_ONE_BUSINESS: {
      let newState = {};
      // console.log(action.business);
      newState = { ...action.business };
      return action.business;
    }
    case EDIT_BUSINESS: {
      // console.log("REDUCER********************",action.business)
      // let newState = {...state}
      // newState[action.busniess.id] = action.business
      // return newState
      return action.business;
    }
    case DELETE_BUSINESS: {
      let newState = { ...state };
      delete newState[action.businessId];
      return newState;
    }
    default:
      return state;
  }
};

export default businessReducer;
