import './EditReview.css';
import { updateReview, getOneReview, getReviews } from '../../../store/review';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import StarRating from '../Rating/StarRating';

export default function EditReview({
  reviewId,
  sessionuid,
  prodcutid,
  editcontent,
  oldrating,
  closeModal,
}) {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [editformcontent, setEditformcontent] = useState(editcontent);
  const [rating, setRating] = useState(oldrating);
  // console.log(oldrating);
  const sessionUser = useSelector((state) => state.session.user);

  const handleEditReview = async (e) => {
    e.preventDefault();
    const newReview = {
      userId: sessionuid,
      businessId: prodcutid,
      rating: rating,
      content: editformcontent,
      username: sessionUser.username,
    };

    const review = await dispatch(updateReview(newReview, reviewId)).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
    if (review) {
      closeModal();
      dispatch(getReviews(prodcutid));
    }
  };

  return (
    <div className="resource-edit-form-container">
      <div className="edit-review-card">
        <h2 className="edit-review-header">Edit Review</h2>
        <form
          className={'resource-edit-form'}
          autoComplete="off"
          onSubmit={(e) => handleEditReview(e)}
        >
          <ul className="errorsLi">
            {errors.map((error, idx) => (
              <li className="errorsLi" key={idx}>
                * {error}
              </li>
            ))}
          </ul>
          <StarRating rating={rating} setRating={setRating} />
          <div className="edit-review-form-group">
            <label className="edit-review-label" htmlFor="reviewContent">
              <div>*Review</div>
            </label>
            <textarea
              id="reviewContent"
              className="edit-review-input"
              type="text"
              name="content"
              value={editformcontent}
              onChange={(e) => setEditformcontent(e.target.value)}
              required
            />
          </div>

          <div className="resource-edit-form-btn-div">
            <div className="resource-btn-container">
              <button
                className="resource-cancel-btn"
                type="button"
                onClick={closeModal}
              >
                Cancel
              </button>

              <div className="resource-btn-container">
                <button className="resource-delete-btn" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
