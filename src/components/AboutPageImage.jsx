import React from 'react';
import AboutPageBg from '../assets/aboutPageBg.svg';

import {
  aboutPageBg,
  aboutPageAaltoLogo,
} from '../styles/aboutPage.module.scss';

const AboutPageImage = () => (
  <div>
    <AboutPageBg className={aboutPageBg} />
  </div>
);

export default AboutPageImage;
