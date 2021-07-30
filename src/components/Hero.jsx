import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import HeroImage from '../assets/laptop.svg';
import LinkArrow from '../assets/linkArrow.svg';

import {
  anchorLink,
  hero,
  heroImage,
  heroLeft,
  heroRight,
} from '../styles/hero.module.scss';

const Hero = () => (
  <section className={hero} aria-label="Hero" role="banner">
    <div className={heroLeft}>
      <h1>Welcome to Developer Experience Portal</h1>
      <p>
        “Developer Experience (DX) is the personal experience that software
        developers have with things and events they encounter in the context of
        development.”
      </p>
      <ul aria-label="Frontpage section" role="navigation">
        <li>
          <AnchorLink
            to="/#for-developers"
            title="Grow as a developer"
            className={anchorLink}
            aria-label="Go to Grow as a developer"
            stripHash
          />
          <LinkArrow />
        </li>
        <li>
          <AnchorLink
            to="/#for-managers"
            title="Work better with developers"
            className={anchorLink}
            aria-label="Go to Work better with developers"
            stripHash
          />
          <LinkArrow />
        </li>
        <li>
          <AnchorLink
            to="/#for-researchers"
            title="Research developer experience"
            className={anchorLink}
            aria-label="Go to Research developer experience"
            stripHash
          />
          <LinkArrow />
        </li>
      </ul>
    </div>
    <div className={heroRight}>
      <HeroImage className={heroImage} />
    </div>
  </section>
);

export default Hero;
