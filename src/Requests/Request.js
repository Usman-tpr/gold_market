import axios from 'axios';

// Set the base URL if needed (e.g., for all API requests)
axios.defaults.baseURL = 'https://gold-backend-brqdykazv-usman-tprs-projects.vercel.app/';

// GET request
export const getRequest = async (url, params = {}) => {
    try {
        const response = await axios.get(url, {
            params,
            headers: {
                Authorization: `Bearer ${localStorage.getItem("g_token")}` 
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error in GET request:", error);
        throw error;
    }
};


export const postRequest = async (url, data) => {
    try {
        // Determine if we need to set `Content-Type`
        const isMultipart = data instanceof FormData;
        
        // Create headers object conditionally
        const headers = {
            'Content-Type': isMultipart ? 'multipart/form-data' : 'application/json'
        };
        
        const token = localStorage.getItem("g_token");
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        
        const response = await axios.post(url, data, { headers });
        console.log(response);
        return response.data;
    } catch (error) {
        console.error("Error in POST request:", error);
        throw error;
    }
};



// PUT request (for update)
export const putRequest = async (url, data) => {
    try {
        const response = await axios.put(url, data);
        return response.data;
    } catch (error) {
        console.error("Error in PUT request:", error);
        throw error;
    }
};

// DELETE request
export const deleteRequest = async (url, data = {}) => {
    try {
        const response = await axios.delete(url, { data });
        return response.data;
    } catch (error) {
        console.error("Error in DELETE request:", error);
        throw error;
    }
};
