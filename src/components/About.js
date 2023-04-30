import about from '../styles/about.css';
import { EnquireButton } from '../shared/EnquireButton';

export const About = () => {
  return (
    <div className="about-container" id="about">
      <h1>About</h1>
      <p>
        Hi, I’m Kate! I am the founder of Saint K9 Training which was inspired
        by my Rottweiler, Saint. Saint was not an easy puppy, and he challenged
        everything I thought I knew about dogs. The more I learnt about him and
        building our relationship, the more I fell in love with dog training. He
        has been my biggest challenge but also the best teacher, and I owe
        everything I have created with Saint K9 to him.
      </p>

      <p>
        I believe communication, structure and consistency are the true
        ingredients to solid foundations of a dog training journey and I live by
        these values with my own dog, as well as any that are in my care.{' '}
        <b>
          My mission is to help my clients create a harmonious relationship with
          their dog, and to teach them how to effectively understand and
          communicate with their dog.
        </b>
      </p>

      <p>
        Whether you are just getting started with a new puppy or a dog you feel
        is portraying undesirable behaviours, I understand how difficult dog
        ownership can feel at times. Dogs crave clear communication and guidance
        from their handler, and my role is to show clients exactly how to
        deliver that. One of the most important parts of dog training for me is
        to enhance the relationship and bond between an owner and their dog.
      </p>

      <p>
        <b>
          Owners love their dogs, but training allows you to communicate
          properly and to truly enjoy their lives together.
        </b>
      </p>
      <EnquireButton />
    </div>
  );
};
