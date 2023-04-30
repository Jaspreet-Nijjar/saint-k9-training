import hero from '../styles/hero.css';
import HeroImage from '../images/hero-image.png';
import { EnquireButton } from '../shared/EnquireButton';

export const Hero = () => {
  return (
    <>
      <section className="hero-container">
        <div className="hero-content">
          <h1 className="hero-heading">Certified K9 Coach</h1>
          <h3 className="hero-sub-heading">Essex and neighbouring towns</h3>
          <EnquireButton />
          <h4 className="heading">
            Worked wonders in helping me to understand and connect with my pup
          </h4>
          <p>
            If I could give Kate 10 stars I would. You can tell that dog
            training is not just a job for her and that she really cares for the
            dogs and ownders she works with. She has worked wonders in helping
            me to understand and connect with my pup. And Willow loves her so
            that say’s something. I couldn’t recommend her enough.
          </p>
          <p>
            <b>Owner of Willow, 6 month Cockapoo</b>
          </p>
        </div>
      </section>
      <div className="hero-image">
        <img src={HeroImage} alt="dog listening to the trainer" />
      </div>
    </>
  );
};
