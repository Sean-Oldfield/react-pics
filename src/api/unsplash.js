import axios from 'axios';

export default axios.create({
    headers: {
        Authorization: `Client-ID 5CrIFGfe-mgsEIGPEe-Qr-oSiBJOMD89hCM1NcMCv0Q`
    },
    baseURL: 'https://api.unsplash.com',
});