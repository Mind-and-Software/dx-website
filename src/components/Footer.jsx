import React from 'react';

import LogoContainer from './LogoContainer';

import { footer, footerLinks, footerText } from '../styles/footer.module.scss';

const Footer = () => (
  <footer aria-label="Footer" role="contentinfo" className={footer}>
    <LogoContainer />
    <div className={footerText}>
      <p>
        This site is dedicated to DX research and provides information based on
        scientific studies on Developer Experience and targeted towards software
        professionals, developers. managers and researchers.
      </p>
      <div className={footerLinks}>
        <a href="/documents/privacy-policy.pdf">Privacy Policy</a>
        <a href="/documents/terms-and-conditions.pdf">Terms of Service</a>
        <a href="mailto:info@devxlab.org">Feedback</a>
      </div>
    </div>
  </footer>
);

export default Footer;
