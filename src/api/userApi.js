import client from './client';

export const registerUser = async (formProps) => {
  try {
    const response = await client.post('/api/v1/auth/signup', formProps);
    return { success: response.data.token, user: response.data.user };
  } catch (error) {
    return { err: error.response.data.errors };
  }
};

export const loginUser = async (formProps) => {
  try {
    const response = await client.post('/api/v1/auth/signin', formProps);
    return { success: response.data.token, user: response.data.user };
  } catch (error) {
    return { err: error.response.data.errors };
  }
};
