import React, {useState} from 'react'

const StarRating = () => {
    const [rating, setRating] = useState(0);
const handleClick = (value) => {
  setRating(value);
};
  return (
     <div className='rating'>
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <span
            key={ratingValue}
            onClick={() => handleClick(ratingValue)}
            style={{
              cursor: "pointer",
              color: ratingValue <= rating ? "#FFB808" : "gray",
            }}
          >
            ★
          </span>
        );
      })}
    </div>
  )
}

export default StarRating