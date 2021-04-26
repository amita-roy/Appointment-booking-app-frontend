import SignInForm from 'container/SignInForm';
import { Link } from 'react-router-dom';
import React from 'react';

const SignInPage = () => (
  <div className="bg-primary bg-opacity-20 p-16">
    <div className="px-20 py-16 bg-white m-auto" style={{ maxWidth: '800px' }}>
      <h1 className="text-4xl mb-14">Sign In</h1>
      <SignInForm />
      <p className="mt-24 text-center">
        New to Encapture?
        <Link
          to="/signup"
          className="ml-2 text-primary font-semibold text-lg hover:underline"
        >
          Create an account
        </Link>
      </p>
    </div>
  </div>
);

export default SignInPage;
