import {createStore} from 'vuex'
import axios from 'axios';

const apiUrl = "https://fakestoreapi.com/products";
export default createStore({
    state: {
        products: [],
        productsInBasket: [],
        totalProductsInBasket: 0
    },
    mutations: {
        getProducts(state, products) {
            state.products = products;
            state.totalProductsInBasket = state.productsInBasket.length;
        },
        addToBasket(state, product) {
            state.productsInBasket.push(product);
            state.totalProductsInBasket += 1;
        },
        removeFromBasket(state, productId) {
            state.productsInBasket = state.productsInBasket
                .filter(item => item.id !== productId);
            state.totalProductsInBasket -= 1;
        }
    },
    actions: {
        async getProducts({commit}) {
            await axios.get(apiUrl).then(response => {
                commit("getProducts", response.data);
            });
        },

        addToBasket({commit}, product) {
            commit("addToBasket", product);
        },

        removeFromBasket({commit}, productId) {
            if (confirm("Are you sure you want to remove this item from the basket?"))
                commit("removeFromBasket", productId);
        }
    },
    modules: {}
})
