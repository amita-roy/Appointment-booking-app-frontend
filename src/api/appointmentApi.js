import client from './client';

export const newAppointment = async (appointment) => {
  const token = localStorage.getItem('token');
  const headers = {
    Authorization: `Basic ${token}`,
  };
  try {
    const response = await client.post('/api/v1/appointments', appointment, { headers });
    return { success: response.data.success };
  } catch (error) {
    return { err: error.response.data.errors };
  }
};

export const fetchAllAppointments = async () => {
  const token = localStorage.getItem('token');
  const headers = {
    Authorization: `Basic ${token}`,
  };
  try {
    const response = await client.get('/api/v1/appointments', {
      headers,
    });
    return { success: response.data };
  } catch (error) {
    return { err: error.response.data };
  }
};
