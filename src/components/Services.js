import { ServicesData } from '../data/ServicesData';
import '../styles/services.css';
import { EnquireButton } from '../shared/EnquireButton';

export const Services = () => {
  return (
    <div id="services">
      <div className="services-content">
        <h1>Services available</h1>
        <p className="content-text">
          Lorem ipsum dolor sit amet, consectetur adipis elit
        </p>
        <EnquireButton />
      </div>

      <div className="grid">
        {ServicesData.map((item, index) => (
          <div className="services-container" key={index}>
            <img
              src={item.image}
              alt="dog training with trainer"
              className="service-image"
            />
            <h2 className="services-subheading">{item.heading}</h2>
            <p className="services-text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
