import React from 'react';
import AaltoLogo from '../assets/aaltoLogo.svg';

import LinkButton from './LinkButton';
import {
  contactParagraph,
  headerArea,
  headerTexts,
} from '../styles/contactParagraph.module.scss';

const ContactParagraph = () => (
  <aside className={contactParagraph} aria-label="Contact info">
    <div className={headerArea}>
      <AaltoLogo />
      <div className={headerTexts}>
        <h2>Mind and Software</h2>
        <h3>Aalto University</h3>
      </div>
    </div>
    <p>
      This site is built by researchers in the
      <b> Mind and Software research group at Aalto University, Finland. </b>
      We are passionate about our research on understanding software developers.
      Many of us are or have been software developers ourselves.
    </p>
    <LinkButton to="/" type="secondary">
      Contact Us
    </LinkButton>
  </aside>
);

export default ContactParagraph;
