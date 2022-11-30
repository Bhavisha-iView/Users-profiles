import React from "react";
import { RatingStar } from "rating-star";


function Ratingstar(props) {


  return (
    <RatingStar
        clickable
        maxScore={100}
        id="123"
        numberOfStar={+(props.rank)} 
      />
  );
}

export default Ratingstar;
