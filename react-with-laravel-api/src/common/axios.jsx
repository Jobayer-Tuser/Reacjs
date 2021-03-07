import Axios from 'axios';

const instance = Axios.create({
    baseUrl : "http://localhost/laravel-project/laravel-react/public/";
});

export default instance;