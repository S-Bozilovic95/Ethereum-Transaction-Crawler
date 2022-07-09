import axios from 'axios';

const API = axios.create({
    baseURL:"https://api.etherscan.io/api"
})

export default API;