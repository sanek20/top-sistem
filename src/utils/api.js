import axios from "axios";

const onResponse = (data) =>
    data.statusText === "OK" ? data : Promise.reject(`Error: ${data}`);

class Api {
    constructor({baseUrl}) {
        this._baseUrl = baseUrl;
    }

    getAuth(email, password) {
        return axios.get(`${this._baseUrl}/auth?email=${email}&password=${password}`)
            .then(onResponse);
    }

    getUserInfo(id) {
        return axios.get(`${this._baseUrl}/auth?email=${email}&password=${password}`)
            .then(onResponse);
    }


}

const config = {
    baseUrl: "http://crm-tc.edvax.ru/api",
};

const api = new Api(config);

export default api;
