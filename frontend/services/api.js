const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:30001';

export const submitContact = async (contactData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });

    if (!response.ok) {
      throw new Error('Failed to submit contact form');
    }

    return await response.json();
  } catch (error) {
    console.error('Contact submission error:', error);
    throw error;
  }
};

export const getSkills = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/skills`);
    if (!response.ok) {
      throw new Error('Failed to fetch skills');
    }
    return await response.json();
  } catch (error) {
    console.error('Skills fetch error:', error);
    throw error;
  }
};

export const getProjects = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/projects`);
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    return await response.json();
  } catch (error) {
    console.error('Projects fetch error:', error);
    throw error;
  }
};

export const checkBackendHealth = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/`);
    if (!response.ok) {
      throw new Error('Backend not available');
    }
    return await response.json();
  } catch (error) {
    console.error('Health check error:', error);
    throw error;
  }
};
