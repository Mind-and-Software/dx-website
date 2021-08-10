/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import LinkButton from '../components/LinkButton';

import emailService from '../services/emailService';

import { signInPage, infoSection } from '../styles/signInPage.module.scss';

const SignInForm = ({ handleSubmit, register, error }) => {
  const isEmail = (value) =>
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      value
    );

  return (
    <div className={signInPage}>
      <h1>Interested in DevX Lab?</h1>
      <p>Join our mailing list to stay updated</p>
      <form onSubmit={handleSubmit()}>
        <input
          type="email"
          className={error ? 'field-error' : ''}
          placeholder="Enter your email address"
          {...register('email', {
            required: 'This field is required',
            validate: (value) => isEmail(value) || 'Not valid email',
          })}
        />
        {error && <p className="error-text">{error.message}</p>}
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
};

const SignInSuccess = ({ email }) => (
  <div className={signInPage}>
    <h1>Thanks for your interest!</h1>
    <p>You will receive updates on {email}</p>
    <LinkButton to="/" type="secondary">
      Back home
    </LinkButton>
  </div>
);

const SignInPage = () => {
  const [submittedValue, setSubmittedValue] = useState('');
  const [backendError, setBackendError] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields, isSubmitted },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    try {
      const result = await emailService.addEmail(data);
      setSubmittedValue(result.email);
      reset('email');
    } catch (error) {
      if (error.status === 400) {
        const errorObject = await error.json();
        setBackendError({
          message: errorObject.detail,
        });
      } else {
        setBackendError({
          message: 'Server error',
        });
      }
    }
  };

  const error =
    backendError || ((touchedFields.email || isSubmitted) && errors.email);

  return (
    <Layout>
      <div className={signInPage}>
        {submittedValue ? (
          <SignInSuccess email={submittedValue} />
        ) : (
          <SignInForm
            register={register}
            handleSubmit={() => handleSubmit(onSubmit)}
            error={error}
          />
        )}
        <span className={infoSection}>
          DevX Lab has been created by the Mind and Software research group at
          Aalto University. <Link to="/about">Learn more</Link>
        </span>
      </div>
    </Layout>
  );
};

export default SignInPage;
