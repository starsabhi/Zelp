import { deleteReview } from '../../../store/review';
import { useDispatch } from 'react-redux';
import './DeleteReview.css';
export default function DeleteReview({
  reviewId,
  sessionuid,
  prodcutid,
  editcontent,
  closeModal,
}) {
  const dispatch = useDispatch();

  const handleReviewDelete = (e) => {
    e.preventDefault();
    const deleteCompleted = dispatch(deleteReview(reviewId));
    if (deleteCompleted) {
      closeModal();
      // console.log('Review DELETE working ');
    }
  };

  return (
    <div className="resource-edit-form-container">
      <div className="delete-review-card">
        <h2 className="delete-review-header">Delete Review</h2>
        <form className={'resource-edit-form'} autoComplete="off">
          This will permanently delete your review
          <div className="delete-song-form-group"></div>
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
                <button
                  className="resource-delete-btn"
                  type="submit"
                  onClick={(e) => handleReviewDelete(e)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
