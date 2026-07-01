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

const privacyPolicyContent = `Privacy Policy for the DevXLab Mobile Application
Last updated: 30 June 2026

Aalto University ("Aalto") collects personal data relating to the users of the DevXLab mobile application ("Application"). This Privacy Policy applies to the DevXLab mobile application.

DevXLab has been developed by researchers in the Mind and Software research group at Aalto University, Finland, to support research on Developer Experience (DevEx).

Protecting your privacy and your personal data is important to us. Aalto is committed to complying with applicable data protection legislation when processing your personal data.

The means and purposes of processing your personal data are described in this Privacy Policy.

This Privacy Policy covers the following areas:

1. Why does Aalto process personal data?
2. What personal data does Aalto process?
3. Sources of information
4. Lawful basis for processing
5. Disclosures of personal data
6. International transfers of personal data
7. Retention period
8. Your rights
9. Who is the controller and who can I contact?

1. Why does Aalto process personal data?

Aalto collects and processes personal data in order to:

• provide and maintain the DevXLab mobile application;
• enable users to create and manage user accounts;
• securely store diary entries and other information submitted by users;
• support scientific research on Developer Experience;
• improve the functionality and usability of the Application;
• maintain the security of the Application and prevent misuse.

2. What personal data does Aalto process?

Aalto will only process personal data that is necessary for the purposes described in this Privacy Policy.

The personal data collected through the Application can be grouped into the following categories:

Account information

• Username or display name
• Email address

Optional background information

• Age
• Gender
• Education level
• Occupation level (for example, student, hobbyist, or professional)

Diary information

• Diary entries describing software development work and experiences
• Programming languages, frameworks, software development tools, and other technologies used
• Responses to questionnaires used in Developer Experience research
• Information about work environment (for example, home, office, university, coffee shop, or another location voluntarily provided by the user)
• Information about work context (for example, working alone or with coworkers)

3. Sources of information

Personal data is collected directly from users when they:

• create a user account;
• complete optional background information;
• record diary entries;
• respond to research questionnaires;
• otherwise use the Application.

4. Lawful basis for processing

Aalto processes personal data on one or more of the following legal bases under the General Data Protection Regulation (GDPR):

• your consent, where applicable;
• the performance of scientific research carried out in the public interest;
• Aalto's legitimate interests in maintaining, improving, and securing the Application.

5. Disclosures of personal data

Aalto discloses personal data only to the extent necessary for the purposes described in this Privacy Policy.

Service providers

Aalto uses service providers to operate and maintain the Application.

Personal data may therefore be processed by service providers acting on behalf of Aalto, including providers responsible for hosting the Application and storing application data.

Aalto takes appropriate measures to ensure that these service providers process personal data only for the purposes described in this Privacy Policy and in accordance with applicable legislation.

Research use

Where users choose to participate in scientific research, authorised researchers at Aalto University may process personal data for research purposes in accordance with applicable data protection legislation and research ethics requirements.

Research results are published only in aggregated or pseudonymized form so that individual participants cannot be identified.

Statutory reasons

Aalto may disclose personal data where required by law or where necessary to fulfil legal obligations or protect the security and integrity of the Application.

6. International transfers of personal data

Personal data is stored using the application's backend infrastructure. If personal data is transferred outside the European Union or the European Economic Area, Aalto will ensure that appropriate safeguards required by applicable data protection legislation are applied.

7. Retention period

Personal data will be retained only for as long as necessary for the purposes described in this Privacy Policy and in accordance with applicable legislation and Aalto University's research data management practices.

Users may request deletion of their account and personal data where applicable.

Data that has already been anonymized or incorporated into published scientific research cannot be removed from existing research results.

8. Your rights

Under the General Data Protection Regulation, you have the right to:

• access your personal data;
• request correction of inaccurate personal data;
• request deletion of your personal data where applicable;
• request restriction of processing;
• object to processing where applicable;
• withdraw consent where processing is based on consent.

You also have the right to lodge a complaint with the Finnish Data Protection Ombudsman.

9. Who is the controller and who can I contact?

Controller

Aalto University Foundation sr, operating as Aalto University

Mailing address:
P.O. Box 11000
FI-00076 AALTO
Telephone: +358 9 47001

Assistant Professor Fabian Fagerholm
Aalto University
Email: fabian.fagerholm@aalto.fi

Data Protection Officer
Aalto University
Email: dpo@aalto.fi`;

const boldLabels = new Set([
  'Account information',
  'Optional background information',
  'Diary information',
  'Service providers',
  'Research use',
  'Statutory reasons',
  'Controller',
  'Mailing address:',
  'Assistant Professor Fabian Fagerholm',
  'Data Protection Officer',
]);

const isMajorSectionLine = (line) => /^\d+\.\s/.test(line);

const isBoldLine = (line, index) =>
  index === 0 ||
  line.startsWith('Last updated:') ||
  isMajorSectionLine(line) ||
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

const renderLegalContent = (content) => {
  const seenMajorLines = new Map();

  return content.split('\n').map((line, index) => {
    const trimmedLine = line.trim();

    if (!trimmedLine) {
      return <div key={index} className={legalSpacer} />;
    }

    let addSeparator = false;

    if (isMajorSectionLine(trimmedLine)) {
      const seenCount = (seenMajorLines.get(trimmedLine) || 0) + 1;
      seenMajorLines.set(trimmedLine, seenCount);
      addSeparator = seenCount > 1;
    }

    return (
      <div key={`${index}-${trimmedLine}`}>
        {addSeparator ? <hr className={legalSeparator} /> : null}
        <p className={getLineClassName(trimmedLine, index)}>
          {renderLineContent(trimmedLine)}
        </p>
      </div>
    );
  });
};

const PrivacyPolicyPage = () => (
  <Layout>
    <main className={legalPage}>
      <article className={legalContent}>
        {renderLegalContent(privacyPolicyContent)}
      </article>
    </main>
  </Layout>
);

export default PrivacyPolicyPage;
