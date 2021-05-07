import client from './client';

export const newAppointment = async (appointment) => {
  const token = localStorage.getItem('token');
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const { date, time } = appointment;
    const serviceId = appointment.serviceSelected.id;
    const response = await client.post(
      '/api/v1/appointments',
      { date, time, service_id: serviceId },
      { headers },
    );
    return { success: response.data.success };
  } catch (error) {
    return { err: error.response.data.errors };
  }
};

export const fetchAllAppointments = async () => {
  const token = localStorage.getItem('token');
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await client.get('/api/v1/appointments', {
      headers,
    });
    return { success: response.data };
  } catch (error) {
    return { err: error };
  }
};
