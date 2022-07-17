import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getReviews, getOneReview } from '../../store/review';
import MainModal from '../MainModal';
import EditReview from './EditReview/index';
import DeleteReview from './DeleteReview';
import AddReview from './AddReview';
import './ReviewCard.css';
import ReadStarRating from './Rating/ReadStarRating';

function ReviewCard({ Id, Reviews }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const CheckingWhat = useSelector((state) => state);

  const [selectedReviewId, setSelectedReviewId] = useState(null);
  const [editcontent, setEditContent] = useState('');
  const [oldrating, setRating] = useState(0);

  const prodcutid = Id;
  console.log(prodcutid);
  const newArr = Reviews.filter((review) => review.businessId == prodcutid);
  // console.log(newArr);

  useEffect(() => {
    dispatch(getReviews(prodcutid));
  }, [dispatch]);

  //EDIT REVIEW MODAL
  const [editReviewModal, seteditReviewModal] = useState(false);
  const openEditSongModal = () => {
    if (editReviewModal) return; // do nothing if modal already showing
    seteditReviewModal(true); // else open modal
    document.getElementById('root').classList.add('overflow');
  };
  const closeEditSongModal = () => {
    if (!editReviewModal) return; // do nothing if modal already closed
    seteditReviewModal(false); // else close modal
    // disable page scrolling:
    document.getElementById('root').classList.remove('overflow');
  };

  //ADD REVIEW MODAL
  const [addtReviewModal, setAddReviewModal] = useState(false);
  const openAddReviewModal = () => {
    if (addtReviewModal) return; // do nothing if modal already showing
    setAddReviewModal(true); // else open modal
    document.getElementById('root').classList.add('overflow');
  };
  const closeAddReviewModal = () => {
    if (!addtReviewModal) return; // do nothing if modal already closed
    setAddReviewModal(false); // else close modal
    // disable page scrolling:
    document.getElementById('root').classList.remove('overflow');
  };

  //DELETE REVIEW MODAL
  const [deleteReviewModal, setdeleteReviewModal] = useState(false);
  const openDeleteSongModal = () => {
    if (deleteReviewModal) return; // do nothing if modal already showing
    setdeleteReviewModal(true); // else open modal
    document.getElementById('root').classList.add('overflow');
  };
  const closeDeleteSongModal = () => {
    if (!deleteReviewModal) return; // do nothing if modal already closed
    setdeleteReviewModal(false); // else close modal
    // disable page scrolling:
    document.getElementById('root').classList.remove('overflow');
  };

  //ADD MODAL HELPER FUNCTION
  const passingAdd = (reId) => {
    openAddReviewModal(true);
    // setSelectedReviewId(reId);
  };

  const passingFun = (reId) => {
    openEditSongModal(true);
    setSelectedReviewId(reId);
  };

  const passingDelete = (reNewId) => {
    openDeleteSongModal(true);
    setSelectedReviewId(reNewId);
  };

  return (
    <>
      <MainModal showModal={editReviewModal} closeModal={closeEditSongModal}>
        <EditReview
          reviewId={selectedReviewId}
          prodcutid={prodcutid}
          sessionuid={sessionUser?.id}
          editcontent={editcontent}
          oldrating={oldrating}
          // sessionUser={sessionUser}
        />
      </MainModal>

      <MainModal showModal={addtReviewModal} closeModal={closeAddReviewModal}>
        <AddReview prodcutid={prodcutid} sessionuid={sessionUser?.id} />
      </MainModal>

      <MainModal
        showModal={deleteReviewModal}
        closeModal={closeDeleteSongModal}
      >
        <DeleteReview
          reviewId={selectedReviewId}
          prodcutid={prodcutid}
          sessionuid={sessionUser?.id}
          editcontent={editcontent}
        />
      </MainModal>

      <div className="MainDivForReviewCard">
        <div className="MainDivForReviewCard2">
          <div className="REviewCardDivH1Tag">
            <div className="reviewCardHeadaer">Review Card</div>
          </div>
          {sessionUser ? (
            <div className="REviewCardDivH1Tag">
              <button
                className="AddReviewbtninsideDiv"
                onClick={() => passingAdd(true)}
              >
                Add Review
              </button>
            </div>
          ) : (
            <></>
          )}
          {newArr?.map((review) => (
            <div className="reviewContentDivwrap" key={review?.id}>
              <div className="rating">
                <div className="infoProfile">
                  <div className="leftSideinfowithProImg">
                    <span>NAME</span>
                    {/* <img
                      className="profilePicImg"
                      src={profilePic}
                      alt={profilePic}
                    ></img> */}
                  </div>
                  <div className="userNameDivwithPro">
                    <span>{review.username}</span>
                  </div>
                  <div className="rightSideinfoReviewCard">
                    Created At:{` `}
                    <span>
                      {/* {review.createdAt.slice(0, 10)} */}
                      {review.createdAt.slice(5, 7)}-
                      {review.createdAt.slice(8, 10)}-
                      {review.createdAt.slice(0, 4)}
                    </span>
                  </div>
                </div>
                <div className="RatingDiv4556891">
                  <ReadStarRating rating={review?.rating} />
                </div>
              </div>
              <div className="reviewContentDivmain">{review?.content}</div>
              {sessionUser && sessionUser?.id === review.userId ? (
                <>
                  <div className="mainDivforTwoBtneditRdR">
                    <button
                      className="reviewEditButton"
                      onClick={() => {
                        passingFun(review?.id);
                        setEditContent(review?.content);
                        setRating(review?.rating);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="reviewDeleteButton"
                      onClick={() => {
                        passingDelete(review?.id);
                        setEditContent(review?.content);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ReviewCard;
