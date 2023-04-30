import reviews from '../styles/reviews.css';
import { ReviewsData } from '../data/ReviewData';

export const Reviews = () => {
  return (
    <section id="reviews">
      <h1>Read the reviews</h1>
      <p className="review-subheading">
        Take a look what recent clients have to say about Saint K9 Training
      </p>

      <a
        className="review-btn"
        href="https://www.google.com/search?sa=X&q=saint%20k9%20training&ved=2ahUKEwiW0-LovZz9AhUHO8AKHSeeDX0QvS56BAghEAE&biw=3360&bih=1790&dpr=2&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:14&tbm=lcl&rflfq=1&num=10&rldimm=17349084784557976960&lqi=ChFzYWludCBrOSB0cmFpbmluZ0i_iYO-wrmAgAhaHxAAEAEQAhgAGAEYAiIRc2FpbnQgazkgdHJhaW5pbmd6BUVzc2V4kgELZG9nX3RyYWluZXKaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTXRaelpxTjFsUkVBRaoBRQoJL20vMDE0amczEAEaHxABIhuLrT9R39Jv6ZDQ9EWc9Xuv2kPdBt9OjOOjvCQqFSIRc2FpbnQgazkgdHJhaW5pbmcoAA&rlst=f#rlfi=hd:;si:17349084784557976960,l,ChFzYWludCBrOSB0cmFpbmluZ0i_iYO-wrmAgAhaHxAAEAEQAhgAGAEYAiIRc2FpbnQgazkgdHJhaW5pbmd6BUVzc2V4kgELZG9nX3RyYWluZXKaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTXRaelpxTjFsUkVBRaoBRQoJL20vMDE0amczEAEaHxABIhuLrT9R39Jv6ZDQ9EWc9Xuv2kPdBt9OjOOjvCQqFSIRc2FpbnQgazkgdHJhaW5pbmcoAA;mv:[[52.6023011,1.7338342999999998],[51.3258405,-0.3207799]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:14"
      >
        {' '}
        Read all Google Reviews
      </a>

      <div className="reviews-grid">
        {ReviewsData.map((review, index) => (
          <div key={index} className="reviews-container">
            <img src={review.image} alt="pictures of different dogs" />
            <h4 className="review-subtext">{review.subtext} </h4>
            <p className="review-name">{review.name}</p>
            <p className="review-text">{review.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
