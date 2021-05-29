import axios from 'axios'

const service = axios.create({
    baseURL : "http://127.0.0.1:8081/xdlearn",
    timeout : 1000
})

export default service