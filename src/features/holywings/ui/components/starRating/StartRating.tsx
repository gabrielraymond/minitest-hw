import React, { useEffect, useState } from "react";

const StartRating = ({ totalStars, rating }: any) => {
  const [selectedStars, setSelectedStars] = useState(0);

  const handleStarClick = (selected: any) => {
    setSelectedStars(selected);
  };

  useEffect(() => {
    setSelectedStars(rating);
  }, [rating]);
  return (
    <div>
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          style={{
            cursor: "pointer",
            color: index < selectedStars ? "gold" : "gray",
          }}
          onClick={() => handleStarClick(index + 1)}
          className="text-2xl"
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StartRating;
