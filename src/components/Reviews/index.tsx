import React from "react";
import css from "./Reviews.module.css";
import type { CamperReview } from "../../types/camper";
import Icon from "../Icon";

interface ReviewProp {
  review: CamperReview;
}

const Review: React.FC<ReviewProp> = ({ review }) => {
  return (
    <div className={css.rev_06}>
      <div className={css.rev_03}>
        <div className={css.rev_01}>{review.reviewer_name[0]}</div>
        <div>
          <p className={css.rev_05}>{review.reviewer_name}</p>
          <div className={css.rev_07}>
            {Array.from({ length: 5 }, (_, i) => (
              <Icon
                name={i < review.reviewer_rating ? "star-pressed" : "star"}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
      <p className={css.rev_02}>{review.comment}</p>
    </div>
  );
};

interface ReviewsProps {
  reviews: CamperReview[];
}

const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  return (
    <div className={css.rev_04}>
      {reviews.map((review, index) => (
        <Review key={index} review={review} />
      ))}
    </div>
  );
};

export default Reviews;
