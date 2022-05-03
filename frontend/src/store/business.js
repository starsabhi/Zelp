const GET_ALL_BUSINESS = "/business/getAllbusinessess"


const loadBusiness = (businessess) => {
    return {
        type : GET_ALL_BUSINESS,
        businessess
    }
}

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
    switch (action.type){
        case GET_ALL_BUSINESS:{
            const newState = {};
            action.businessess.forEach(business =>(newState[business.id]=business));
            return newState
        }
        default :
            return state
    }
}

export default businessReducer;
