/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import Layout from '../components/layout';
import LinkButton from '../components/LinkButton';

import { signInPage } from '../styles/signInPage.module.scss';

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
          {...register('emailField', {
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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields, isSubmitted, isSubmitSuccessful },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    setSubmittedValue(data.emailField);
    reset('emailField');
  };

  const error = (touchedFields.emailField || isSubmitted) && errors.emailField;

  return (
    <Layout>
      {isSubmitSuccessful ? (
        <SignInSuccess email={submittedValue} />
      ) : (
        <SignInForm
          register={register}
          handleSubmit={() => handleSubmit(onSubmit)}
          error={error}
        />
      )}
    </Layout>
  );
};

export default SignInPage;
