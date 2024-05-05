import axios from 'axios';
import { setJobsForClient } from './utils';

export const fetchJobsData = async (scb, fcb) => {
    

    const url = "https://api.weekday.technology/adhoc/getSampleJdJSON";
    try {
        const data = { "limit": 10, "offset": 0 };
        const response = await axios.post(url, data);
        const adaptedData = (setJobsForClient(response?.data));
        scb?.(adaptedData); // Success callback
    } catch (error) {
        console.error('Error:', error);
        scb?.(setJobsForClient(null))
    }
};


