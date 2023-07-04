import React from 'react';
import Box from './Box';
import './Portfolio.css';
import img1 from '../../assets/portfolio/mobile/image-seraph.jpg';
import img2 from '../../assets/portfolio/mobile/image-eebox.jpg';
import img3 from '../../assets/portfolio/mobile/image-federal.jpg';
import img4 from '../../assets/portfolio/mobile/image-del-sol.jpg';
import img5 from '../../assets/portfolio/mobile/image-prototype.jpg';
import img6 from '../../assets/portfolio/mobile/image-228b.jpg';
import img7 from '../../assets/portfolio/mobile/image-edelweiss.jpg';
import img8 from '../../assets/portfolio/mobile/image-netcry.jpg';
import img9 from '../../assets/portfolio/mobile/image-hypers.jpg';
import img10 from '../../assets/portfolio/mobile/image-sxiv.jpg';
import img11 from '../../assets/portfolio/mobile/image-trinity.jpg';
import img12 from '../../assets/portfolio/mobile/image-paramour.jpg';
import Footer from '../home/Footer';

export default function Portfolio() {
  return (
    <div>
      <>
        <Box title="Seraph Station" date="September 2019" img={img1} />
        <Box title="Eebox Building" date="August 2017" img={img2} />
        <Box title="Federal II Tower" date="March 2017" img={img3} />
        <Box title="Project Del Sol" date="January 2016" img={img4} />
        <Box title="Le Prototype" date="October 2015" img={img5} />
        <Box title="228B Tower" date="April 2015" img={img6} />
        <Box title="Grand Edelweiss Hotel" date="December 2013" img={img7} />
        <Box title="Netcry Tower" date="August 2012" img={img8} />
        <Box title="Hypers" date="January 2012" img={img9} />
        <Box title="SXIV Tower" date="March 2011" img={img10} />
        <Box title="Trinity Bank Tower" date="September 2010" img={img11} />
        <Box title="Project Paramour" date="February 2008" img={img12} />
        <Footer />
      </>
    </div>
  );
}
