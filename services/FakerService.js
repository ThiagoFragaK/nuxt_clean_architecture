import axios from 'axios';

export default {
    getAllProducts() {
        return axios.get(`https://fakestoreapi.com/products?limit=15`)
            .then((response) => {
                return response.data;
            })
    },
    getProductByID(productID) {
        return axios.get(`https://fakestoreapi.com/products/${productID}`)
            .then((response) => {
                return response.data;
            });
    },
}