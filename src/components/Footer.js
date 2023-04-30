import footer from '../styles/footer.css';
import Logo from '../images/logo.png';
import Image from '../images/image 6.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="aid-logo">
        <img
          src={Image}
          alt="Dog First Aid Logo"
          className="aid-logo"
          width={111}
          height={73}
        />
      </div>

      <section className="footer-content">
        <img
          src={Logo}
          alt="saint k9 training logo"
          className="logo"
          width={111}
          height={111}
        />
        <div className="main">
          <h1 className="footer-heading main">saint k9 training</h1>
          <p className="footer-text main">
            &copy; 2023 SaintK9Training all rights reserved. Created by{' '}
            <b>Creative Boomerang</b>
          </p>
        </div>
      </section>
    </footer>
  );
};
