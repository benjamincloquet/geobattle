/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm, useField } from 'react-form';
import './LinkAccount.scss';

async function validateAccountLink(value, instance) {
  if (!value) {
    return 'An account link is required';
  }

  return instance.debounce(async () => {
    console.log('checking link');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // All names are valid, so return a false error
    return false;
  }, 500);
}

const AccountLinkInput = () => {
  const {
    meta: { error, isTouched, isValidating },
    getInputProps,
  } = useField('accountLink', {
    validate: validateAccountLink,
  });

  return (
    <>
      <input {...getInputProps()} />
      {isValidating ? 'Validating...' : null}
      {!isValidating && error && isTouched ? 'Error' : null}
    </>
  );
};

const LinkAccount = () => {
  const {
    Form,
    meta: { isSubmitting, canSubmit },
  } = useForm({
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <div className="link-account">
      <h1>GeoGuessr account</h1>
      <Form>
        <label>
          Enter your GeoGuessr account link here. You can find it at the bottom of your profile on geoguessr.com.
          {' '}
          <AccountLinkInput />
        </label>
        <input type="submit" value="Link Account" disabled={!canSubmit} />
        {isSubmitting ? 'Submitting...' : null}
      </Form>
    </div>
  );
};

export default LinkAccount;
