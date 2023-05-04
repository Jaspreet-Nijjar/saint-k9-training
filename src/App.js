import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { FAQs } from './components/FAQ';
import { ImageSlider } from './components/ImageSlider';
import { Reviews } from './components/Reviews';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Reviews />
      <About />
      <ImageSlider />
      <FAQs />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
