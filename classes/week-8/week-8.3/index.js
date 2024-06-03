const axios = require('axios');

async function main() {
    try {
        const response = await axios.get('https://sum-server.100xdevs.com/todos');
        console.log(response.data.todos.length);
    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error('Error response from server:', error.response.status, error.response.data);
        } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received:', error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error in setting up the request:', error.message);
        }
    }
}

main();
