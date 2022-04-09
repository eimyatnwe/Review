import React, { useState } from "react";
import reviews from "./Data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = reviews[index];
  const checkIndex = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    } else {
      return number;
    }
  };
  const nextReview = () => {
    setIndex(() => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };
  const prevReview = () => {
    setIndex(() => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNum = Math.floor(Math.random() * reviews.length);
    if (randomNum === index) {
      randomNum = index + 1;
    }
    setIndex(checkIndex(randomNum));
  };
  return (
    <div className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          {" "}
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div>
        <button className="prev-btn" onClick={prevReview}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextReview}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        Suprise Me
      </button>
    </div>
  );
};

export default Review;
