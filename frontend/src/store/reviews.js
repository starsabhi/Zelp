import { csrfFetch } from "./csrf";

const LOAD_REVIEWS = 'comments/LOAD_REVIEWS'
const ADD_REVIEWS = 'comments/ADD_REVIEWS'

const loadReviews = (reviews) => ({
    type: LOAD_REVIEWS,
    reviews
})

const addReview = (reviews) => ({
    type: ADD_REVIEWS,
    reviews
})


export const getReviews = (businessId) =>  async (dispatch) =>{
    const res = await csrfFetch(`/api/review/${businessId}`)

    if(res.ok){
        const reviews = await res.json()
        dispatch(loadReviews(reviews))
        return reviews
    }
}

export const writeReview = (review) => async(dispatch) => {
    const res = await csrfFetch(`/api/review/`,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
    })

    if(res.ok){
        const review = await res.json()
        dispatch(addReview(review))
        return review
    }
}


const initialState = {}
const reviewReducer = (state = initialState, action) => {
    let newState = {...state}
    switch (action.type){
        case LOAD_REVIEWS:{
            // let newState = {...state}
            //   console.log(action,"************************REVIEW REDUCER**********")
            // action.reviews.forEach((review)=>{
            //     newState[review.id] = review
            // })
            return action
        }
        case ADD_REVIEWS:{
            let newState = {...state}
            // console.log(action,"**********************************************")
            newState[action.id] = action
            return newState
        }
        default:
            return state;

    }
}

export default reviewReducer;
