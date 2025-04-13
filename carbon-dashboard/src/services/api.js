// src/services/api.js
import axios from 'axios';

const API_BASE = 'http://localhost:5000';

export const fetchCarbonData = async () => {
  const res = await axios.get(`${API_BASE}/api/carbon`);
  return res.data;
};

  export const fetchJobData = async () => {
    const res = await axios.get(`${API_BASE}/api/jobs`);
    return res.data;
  };

  export const fetchClusterLoad = async () => {
    const res = await axios.get(`${API_BASE}/api/cluster-load`);
    return res.data;
  };

  export const fetchScheduleData = async () => {
    const res = await axios.get(`${API_BASE}/api/schedule`);
    return res.data;
  };
  
