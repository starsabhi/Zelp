import './AddReview.css';
import { getReviews, writeReview } from '../../../store/review';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import StarRating from '../Rating/StarRating';

export default function AddReview({ sessionuid, prodcutid, closeModal }) {
  const dispatch = useDispatch();
  const [content, setContent] = useState('');
  const [errors, setErrors] = useState([]);
  const [rating, setRating] = useState(0);
  const sessionUser = useSelector((state) => state.session.user);

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    // const newContent = content.trim();
    // console.log(`888${typeof content}888`);
    const newReview = {
      userId: sessionuid,
      businessId: prodcutid,
      rating: rating,
      content: content,
      username: sessionUser.username,
    };

    const review = await dispatch(writeReview(newReview)).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });
    if (review) {
      closeModal();
      dispatch(getReviews(prodcutid));
      resetAdd();
    }
  };

  const resetAdd = () => {
    setContent('');
  };

  return (
    <div className="resource-add-form-container">
      <div className="add-review-card">
        <h2 className="add-review-header">Add Review</h2>
        <form
          className={'resource-add-form'}
          autoComplete="off"
          onSubmit={(e) => handleSubmitReview(e)}
        >
          <ul className="errorsLi">
            {errors.map((error, idx) => (
              <li className="errorsLi" key={idx}>
                * {error}
              </li>
            ))}
          </ul>
          <StarRating rating={rating} setRating={setRating} />
          <div className="add-review-form-group">
            <label className="add-review-label" htmlFor="reviewContent">
              <div>*Review</div>
            </label>
            <textarea
              id="reviewContent"
              className="add-review-input"
              type="text"
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
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
