import axios from 'axios'

const Axios = () => {
    axios.interceptors.request.use(function (config) {
        console.log(config);
        return config;
    }, function (error) {

        return Promise.reject(error);
    });

    axios.interceptors.response.use(function (config) {
        // console.log(config);
        return Promise.reject(config);
    }, function (error) {

        return Promise.reject(error);
    });

    axios.get('https://jsonplaceholder.typicode.com/posts/1').then(function (response) {
        console.log(response.data);
    })
    return (
        <>

        </>
    )
}

export default Axios;