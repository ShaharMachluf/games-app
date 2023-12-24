import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '980a3273c12949659061ccedc04c44c3'
    }
})