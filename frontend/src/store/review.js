import { csrfFetch } from './csrf';

const LOAD_REVIEWS = 'review/LOAD_REVIEWS';
const LOAD_ALLREVIEWS = 'review/LOAD_ALLREVIEWS';
const ADD_REVIEWS = 'review/ADD_REVIEWS';
const EDIT_REVIEW = 'review/EDIT_REVIEWS';
const DELETE_REVIEW = 'review/DELETE_REVIEWS';
const ONE_REVIEW = 'review/ONE_REVIEW';

const removeReviews = (reviewId) => ({
  type: DELETE_REVIEW,
  reviewId,
});

const oneReview = (reviews) => ({
  type: ONE_REVIEW,
  reviews,
});

const loadReviews = (reviews) => ({
  type: LOAD_REVIEWS,
  reviews,
});

const loadAllReviews = (reviews) => ({
  type: LOAD_ALLREVIEWS,
  reviews,
});

const addReview = (review) => ({
  type: ADD_REVIEWS,
  review,
});

const editReview = (review) => ({
  type: EDIT_REVIEW,
  review,
});

export const getAllReviews = () => async (dispatch) => {
  const res = await csrfFetch(`/api/review/`);
  // console.log('********************8', res);
  if (res.ok) {
    const reviews = await res.json();
    // console.log('***************', reviews);
    dispatch(loadAllReviews(reviews));
    return reviews;
  }
};

export const getReviews = (businessId) => async (dispatch) => {
  const res = await csrfFetch(`/api/review/${businessId}`);
  // console.log('********************8', res);
  if (res.ok) {
    const reviews = await res.json();
    // console.log('***************', reviews);
    dispatch(loadReviews(reviews));
    return reviews;
  }
};

export const getOneReview = (reviewId, productId) => async (dispatch) => {
  // console.log(reviewId, '***********************');
  const res = await csrfFetch(`/api/review/${productId}/${reviewId}`, {
    method: 'GET',
  });
  // console.log('GET COMPLETED OT NOT &******');
  const review = await res.json();
  // console.log(review, 'GETIING ONE REVIEW OR NOT');
  dispatch(oneReview(review));
  return review;
};

export const writeReview = (review) => async (dispatch) => {
  console.log(review);
  const res = await csrfFetch(`/api/review/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(review),
  });
  // console.log(res);
  console.log(review, '________________________________________-');

  if (res.ok) {
    const review = await res.json();
    // console.log(review);
    dispatch(addReview(review));
    return review;
  }
};

export const deleteReview = (reviewId) => async (dispatch) => {
  // console.log('&&*&*&*&*&*&*&*', reviewId);
  const res = await csrfFetch(`/api/review/${reviewId}`, {
    method: 'DELETE',
  });

  // console.log('&&*&*&*&*&*&*&*COMPLETD OR NOT');
  if (res.ok) {
    const reviewId = await res.json();
    dispatch(removeReviews(reviewId));
  }
};

export const updateReview = (review, id) => async (dispatch) => {
  // console.log(review, id);
  const res = await csrfFetch(`/api/review//${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(review),
  });
  // console.log(res);

  if (res.ok) {
    const review = await res.json();
    // console.log(review);
    dispatch(editReview(review));
    return review;
  }
};

const initialState = {};
const reviewReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case LOAD_REVIEWS: {
      action.reviews.forEach((review) => {
        newState[review.id] = review;
      });
      return newState;
    }

    case LOAD_ALLREVIEWS: {
      action.reviews.forEach((review) => {
        newState[review.id] = review;
      });
      return newState;
    }

    case ADD_REVIEWS: {
      newState[action.review.id] = action.review;
      return newState;
    }

    case EDIT_REVIEW: {
      newState[action.review.id] = action.review;
      return newState;
    }

    case DELETE_REVIEW: {
      delete newState[action.reviewId];
      return newState;
    }

    default:
      return state;
  }
};

export default reviewReducer;
