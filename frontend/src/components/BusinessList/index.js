import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllbusinessess } from '../../store/business';
import './BusinessList.css';
import { NavLink } from 'react-router-dom';
import { getAllReviews } from '../../store/review';
import ReadStarRating from '../ReviewCard/Rating/ReadStarRating';

const BusinessList = () => {
  const dispatch = useDispatch();
  const businessList = useSelector((state) => Object.values(state.business));
  console.log(businessList);
  useEffect(() => {
    dispatch(getAllbusinessess());
  }, [dispatch]);
  //--------------TOTAL REVIEWS------------
  useEffect(() => {
    dispatch(getAllReviews());
  }, [dispatch]);
  const Review = useSelector((state) => state.review);
  const Reviews = Object.values(Review);

  //TRY2-----------------------------------------
  const countRating = (id) => {
    let eachArr = Reviews.filter((ele) => ele.businessId == id);
    let totalRating = 0;
    eachArr.forEach((reviewIn) => {
      totalRating += reviewIn.rating;
    });
    if (eachArr.length) {
      return Math.round(totalRating / eachArr.length);
    } else {
      return 0;
    }
  };

  const countRating2 = (id) => {
    let eachArr = Reviews.filter((ele) => ele.businessId == id);
    let totalRating = 0;
    eachArr.forEach((reviewIn) => {
      totalRating += reviewIn.rating;
    });
    if (eachArr.length) {
      return Math.round(eachArr.length);
    } else {
      return 0;
    }
  };

  //_________________________________________________________

  return (
    <>
      <div className="businessListClass">
        {businessList?.map(({ id, name, category, image, city, state }) => (
          <div key={id} className="busniessClassArr">
            <NavLink to={`business/${id}`}>
              <div className="contentdiv">
                <div className="leftSIDEoFSIGNLEDIV">
                  <img className="businessListimage" src={image} alt={image} />
                </div>
                <div className="rightSIDEoFSIGNLEDIV">
                  <h2 className="BusniessIndName">{name}</h2>
                  <div className="MainRatingDivHomePAge">
                    <div className="RatingDivUpdate">
                      <ReadStarRating rating={countRating(id)} />
                      {` `}
                      <div className="ratingNumbersDiv">
                        {countRating2(id)}
                        {` `}
                      </div>
                    </div>
                  </div>
                  <div className="catDivwithgreybg">
                    <div className="catDivwithgreybgD2">{category}</div>
                  </div>
                  <div>
                    <span className="OpenTimeSpan">Open</span>
                    <span className="OpenTimeSpan2">{`Until 10.00 pm`}</span>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
};
export default BusinessList;
