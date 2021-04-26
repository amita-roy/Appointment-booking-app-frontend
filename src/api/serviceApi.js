import client from './client';

const fetchServices = async () => {
  try {
    const response = await client.get('/api/v1/services');
    return { success: response.data.services };
  } catch (error) {
    return { err: error.response.data.errors };
  }
};

export default fetchServices;
