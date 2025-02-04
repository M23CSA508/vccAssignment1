const axios = require('axios'); 

const vm1_ip = '<Replace with VM1\'s actual IP address>'; 
const port = 3000;

axios.get(`${vm1_ip}:${port}/api`)
  .then(response => {
    console.log('Response from VM1:', response.data);
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });
