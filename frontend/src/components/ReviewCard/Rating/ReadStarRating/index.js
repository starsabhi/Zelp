import { FaStar } from 'react-icons/fa';
import './StarRating.css';

function ReadStarRating({ rating }) {
  return (
    <>
      {[...Array(5)].map((star, idx) => {
        const value = idx + 1;
        return (
          <FaStar
            size={20}
            className="readStars"
            color={value <= rating ? '#EF0107' : '#8c91ab'}
            key={idx}
          />
        );
      })}
    </>
  );
}

export default ReadStarRating;
