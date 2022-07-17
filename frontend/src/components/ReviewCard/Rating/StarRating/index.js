import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './StarRating.css';
function StarRating({ rating, setRating }) {
  const [hover, setHover] = useState(null);
  return (
    <div>
      {[...Array(5)].map((star, idx) => {
        const value = idx + 1;
        return (
          <label key={idx}>
            <input
              type="radio"
              name="rating"
              value={value}
              onClick={() => setRating(value)}
            ></input>
            <FaStar
              size={37}
              className="stars"
              color={value <= (hover || rating) ? '#EF0107' : '#bfbaba'}
              onMouseEnter={() => setHover(value)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
}

export default StarRating;
