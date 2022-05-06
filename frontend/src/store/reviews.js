import { csrfFetch } from "./csrf";

const LOAD_REVIEWS = 'review/LOAD_REVIEWS'
const ADD_REVIEWS = 'review/ADD_REVIEWS'
const EDIT_REVIEW = 'review/EDIT_REVIEWS'
const DELETE_REVIEW = 'review/DELETE_REVIEWS'
const ONE_REVIEW = "review/ONE_REVIEW"

const removeReviews = (reviews) => ({
    type: DELETE_REVIEW,
    reviews
})


const oneReview = (reviews) => ({
    type: ONE_REVIEW,
    reviews
})



const loadReviews = (reviews) => ({
    type: LOAD_REVIEWS,
    reviews
})

const addReview = (reviews) => ({
    type: ADD_REVIEWS,
    reviews
})

const editReview = (review) => ({
    type: EDIT_REVIEW,
    review
})


export const getReviews = (businessId) =>  async (dispatch) =>{
    const res = await csrfFetch(`/api/review/${businessId}`)

    if(res.ok){
        const reviews = await res.json()
        dispatch(loadReviews(reviews))
        return reviews
    }
}


export const getOneReview = (reviewId,BusinessId) => async (dispatch) => {
    console.log(reviewId,"***********************")
    const res = await csrfFetch(`/api/review/${BusinessId}/${reviewId}`,{
        method: "GET"
    });
    console.log("GET COMPLETED OT NOT &******")
    const review = await res.json()
    console.log(review, "GETIING ONE REVIEW OR NOT")
    dispatch(oneReview(review));
    return review;
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

export const deleteReview = (reviewId) => async (dispatch) => {
    // console.log("&&*&*&*&*&*&*&*", reviewId);
    const res = await csrfFetch(`/api/review/${reviewId}`,{
        method:"DELETE"
    })

    if(res.ok){
        const reviewId = await res.json();
        dispatch(removeReviews(reviewId))
    }
}



export const updateReview = (review) => async(dispatch) => {
    const res = await csrfFetch(`/api/${review.id}`,{
        method:"PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
    })

    if(res.ok){
        const review = await res.json()
        dispatch(editReview(review))
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

        case EDIT_REVIEW: {
            return action.review
        }

        case DELETE_REVIEW:{
            delete newState[action.reviewId]
            return newState
        }
        case ONE_REVIEW:{
            let newState = {};
            newState = {...action.reviews}
            console.log(action,"****************************")
            return newState
        }

        default:
            return state;

    }
}

export default reviewReducer;
