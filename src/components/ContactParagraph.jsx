import React from 'react';
import AaltoLogo from '../assets/aaltoLogo.svg';

import LinkButton from './LinkButton';
import {
  contactParagraph,
  headerArea,
  headerTexts,
} from '../styles/contactParagraph.module.scss';

const ContactParagraph = () => (
  <div className={contactParagraph}>
    <div className={headerArea}>
      <AaltoLogo />
      <div className={headerTexts}>
        <h2>Mind and Software</h2>
        <h3>Aalto University</h3>
      </div>
    </div>
    <p>
      This site is built by researchers in the
      <span> Mind and Software research group at Aalto University, Finland. </span>
      We are passionate about our research on understanding software developers.
      Many of us are or have been software developers ourselves.
    </p>
    <LinkButton to="/" type="secondary">
      Contact Us
    </LinkButton>
  </div>
);

export default ContactParagraph;
