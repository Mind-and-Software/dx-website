import React from 'react';
import AaltoLogo from '../assets/aaltoLogo.svg';

import LinkButton from './LinkButton';
import {
  contactParagraph,
  headerArea,
  headerTexts,
  mainHeader,
  subHeader,
} from '../styles/contactParagraph.module.scss';

const ContactParagraph = () => (
  <div className={contactParagraph}>
    <div className={headerArea}>
      <AaltoLogo />
      <div className={headerTexts}>
        <span className={mainHeader}>Mind and Software</span>
        <span className={subHeader}>Aalto University</span>
      </div>
    </div>
    <p>
      This site is built by researchers in the
      <span> css Mind and Software research group at Aalto University, Finland. </span>
      We are passionate about our research on understanding software developers.
      Many of us are or have been software developers ourselves.
    </p>
    <LinkButton to="/" type="secondary">
      Contact Us
    </LinkButton>
  </div>
);

export default ContactParagraph;
