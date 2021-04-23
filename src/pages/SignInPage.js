import SignInForm from 'container/SignInForm';
import React from 'react';

const SignInPage = () => (
  <div className="bg-primary bg-opacity-20">
    <div className="px-20 py-16 bg-white" style={{ maxWidth: '800px' }}>
      <h1 className="text-4xl mb-14">Sign In</h1>
      <SignInForm />
    </div>
  </div>
);

export default SignInPage;
