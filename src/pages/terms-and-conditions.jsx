/* eslint-disable max-len */
import React from 'react';

import Layout from '../components/layout';
import {
  legalBoldLine,
  legalBodyLine,
  legalContent,
  legalEmailLink,
  legalPage,
  legalSectionHeading,
  legalSeparator,
  legalSpacer,
  legalTitle,
} from '../styles/legalPage.module.scss';

const termsAndConditionsContent = `GENERAL TERMS OF USE – DEVXLAB MOBILE APPLICATION
Last updated: [30.6.2026]

1. General

Welcome to DevXLab, a mobile application developed by researchers in the Mind and Software research group at Aalto University, Finland. DevXLab is designed to support research on Developer Experience (DevEx) by enabling users to record diary entries about their software development work and experiences. DevXLab is provided for research and educational purposes.

The application allows users to record information about their software development activities, working context, and experiences. Where applicable, users may also choose to allow their data to be used for scientific research. Participation in research is voluntary unless otherwise stated for a specific research study.

1.1

These General Terms of Use ("Terms") govern the use of the DevXLab Mobile Application ("Service"), provided by Aalto University ("Aalto").

By using the Service, you agree to comply with these Terms as a user ("User"). You also confirm that you are at least 16 years of age or that you have the consent of your parent or legal guardian to use the Service.

1.2

To use the Service, you must create an account and provide the information requested during registration. Additional profile information may be provided voluntarily.

1.3

Aalto may update these Terms from time to time. Updated Terms will be made available through the Service. Continued use of the Service after changes become effective constitutes acceptance of the updated Terms. If you do not agree with the revised Terms, you should discontinue using the Service.

2. Service

2.1

The Service enables users to record information about their software development work and experiences. Users retain ownership of the diary entries and other content they submit through the Service.

To the extent that submitted information constitutes personal data, Aalto processes that information in accordance with the applicable Privacy Policy.

2.2

The Service collects information necessary to operate the application and, where applicable, to support scientific research on Developer Experience.

Information may include:

• email address;
• username or display name;
• optional background information such as age, education level, and occupation level;
• diary entries;
• information about programming languages, frameworks, IDEs, and other development tools;
• self-reported wellbeing assessments (SPANE and SAM questionnaires);
• information about work environment and work context voluntarily provided by the User.

Participation in scientific research is voluntary unless otherwise stated for a specific research study.

The Service may be updated from time to time to improve functionality, security, and usability.

2.3

Aalto strives to keep the Service available but may temporarily suspend, modify, or discontinue the Service whenever necessary for maintenance, security, research activities, or other operational reasons.

2.4

Aalto may suspend access to the Service or remove information stored within the Service if it reasonably believes that:

• these Terms have been violated;
• the security or operation of the Service is at risk; or
• the content stored in the Service is unlawful or otherwise inappropriate.

3. Obligations of the User

3.1

The User shall not use the Service for unlawful, fraudulent, threatening, abusive, or otherwise inappropriate purposes.

3.2

The User is responsible for maintaining the confidentiality of their account credentials.

The User shall immediately notify Aalto if they become aware of unauthorized use of their account or any suspected security incident.

3.3

The User is responsible for obtaining and maintaining the equipment, software, and internet connection required to use the Service.

3.4

Diary entries are intended to describe the User's own software development experiences.

Users should not include:

• confidential company information;
• proprietary source code;
• passwords or security credentials;
• trade secrets;
• personal information about other individuals unless they have appropriate permission to do so.

The User is solely responsible for the content they submit.

3.5

The User may not copy, misuse, or remove any trademarks, logos, copyright notices, or other proprietary notices displayed within the Service.

4. Intellectual Property Rights

4.1

The Service, including its software, design, documentation, trademarks, and other intellectual property rights, belongs to Aalto University or its licensors.

The User may use the Service only as intended and in accordance with these Terms.

Nothing in these Terms transfers ownership of the Service to the User.

The User retains ownership of the diary entries and other information that they create within the Service.

5. Price

5.1

The Service is provided free of charge.

6. Warranty and Limitation of Liability

6.1

The Service is provided on an "as is" and "as available" basis.

To the extent permitted by applicable law, Aalto makes no warranties regarding the availability, reliability, accuracy, or suitability of the Service.

6.2

To the extent permitted by applicable law, Aalto shall not be liable for indirect, incidental, consequential, or special damages arising from the use of, or inability to use, the Service.

Nothing in these Terms excludes or limits liability where such exclusion or limitation is prohibited by applicable law.

7. Privacy

7.1

Personal data collected through the Service is processed in accordance with the DevXLab Privacy Policy.

Users who choose to participate in scientific research may also receive additional information describing how research data is processed.

8. Termination

8.1

The User may stop using the Service at any time.

Users may delete their account in accordance with the functionality provided by the Service. Personal data will be processed and deleted in accordance with the Privacy Policy and applicable legal obligations.

Aalto may suspend or terminate access to the Service where necessary to protect the security, integrity, or lawful operation of the Service.

9. Applicable Law

9.1

These Terms and the use of the Service are governed by the laws of Finland.

Any disputes relating to these Terms shall be resolved by the competent courts of Finland unless otherwise required by applicable law.

10. Contact

Questions regarding these Terms may be directed to:

Fabian Fagerholm
Aalto University
Email: fabian.fagerholm@aalto.fi`;

const boldLabels = new Set([
  'Information may include:',
  'Users should not include:',
  'Questions regarding these Terms may be directed to:',
  'Fabian Fagerholm',
]);

const isMajorSectionLine = (line) => /^\d+\.\s/.test(line);

const isSubsectionLine = (line) => /^\d+\.\d+$/.test(line);

const isBoldLine = (line, index) =>
  index === 0 ||
  line.startsWith('Last updated:') ||
  isMajorSectionLine(line) ||
  isSubsectionLine(line) ||
  boldLabels.has(line);

const getLineClassName = (line, index) => {
  if (index === 0) {
    return legalTitle;
  }

  if (isMajorSectionLine(line)) {
    return legalSectionHeading;
  }

  return isBoldLine(line, index) ? legalBoldLine : legalBodyLine;
};

const renderLineContent = (line) => {
  const emailMatch = line.match(/^Email:\s*(.+)$/);

  if (!emailMatch) {
    return line;
  }

  const emailAddress = emailMatch[1];

  return (
    <>
      Email:{' '}
      <a className={legalEmailLink} href={`mailto:${emailAddress}`}>
        {emailAddress}
      </a>
    </>
  );
};

const renderLegalContent = (content) =>
  content.split('\n').map((line, index) => {
    const trimmedLine = line.trim();

    if (!trimmedLine) {
      return <div key={index} className={legalSpacer} />;
    }

    return (
      <div key={`${index}-${trimmedLine}`}>
        {isMajorSectionLine(trimmedLine) ? <hr className={legalSeparator} /> : null}
        <p className={getLineClassName(trimmedLine, index)}>
          {renderLineContent(trimmedLine)}
        </p>
      </div>
    );
  });

const TermsAndConditionsPage = () => (
  <Layout>
    <main className={legalPage}>
      <article className={legalContent}>
        {renderLegalContent(termsAndConditionsContent)}
      </article>
    </main>
  </Layout>
);

export default TermsAndConditionsPage;
