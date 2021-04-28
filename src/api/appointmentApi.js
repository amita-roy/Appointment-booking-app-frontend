import client from './client';

export const newAppointment = async (appointment) => {
  try {
    const response = await client.post('/api/v1/appointments', appointment);
    return { success: response.data.success };
  } catch (error) {
    return { err: error.response.data.errors };
  }
};

export const fetchAllAppointments = async (appointment) => {
  try {
    const response = await client.get('/api/v1/appointments', appointment);
    return { success: response.data.appointments };
  } catch (error) {
    return { err: error.response.data.errors };
  }
};
