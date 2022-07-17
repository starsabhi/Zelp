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

export const updateBusiness = (newbusiness, id) => async (dispatch) => {
  const {
    name,
    ownerId,
    category,
    description,
    address,
    city,
    state,
    zip_code,
    phone_number,
    image,
  } = newbusiness;

  const formData = new FormData();
  formData.append('name', name);
  formData.append('ownerId', ownerId);
  formData.append('description', description);
  formData.append('address', address);
  formData.append('category', category);
  formData.append('state', state);
  formData.append('city', city);
  formData.append('phone_number', phone_number);
  formData.append('zip_code', zip_code);

  if (image) formData.append('image', image);

  const response = await csrfFetch(`/api/business/${id}/edit`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: formData,
  });

  if (response.ok) {
    const business = await response.json();
    dispatch(editBusiness(business));
    return business;
  }
};

export const writeBusiness = (newbusiness) => async (dispatch) => {
  const {
    name,
    ownerId,
    category,
    description,
    address,
    city,
    state,
    zip_code,
    phone_number,
    image,
  } = newbusiness;

  const formData = new FormData();
  formData.append('name', name);
  formData.append('ownerId', ownerId);
  formData.append('description', description);
  formData.append('address', address);
  formData.append('category', category);
  formData.append('state', state);
  formData.append('city', city);
  formData.append('phone_number', phone_number);
  formData.append('zip_code', zip_code);

  if (image) formData.append('image', image);
  // console.log(image, '************************************');

  console.log(formData, '________________________________________-');
  const response = await csrfFetch('/api/business/new', {
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data' },
    body: formData,
  });

  if (response.ok) {
    const business = await response.json();
    dispatch(addBusiness(business));
    return business;
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
      return newState;
    }
    case EDIT_BUSINESS: {
      let newState = {};
      newState[action.business.id] = action.business;
      return newState;
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
