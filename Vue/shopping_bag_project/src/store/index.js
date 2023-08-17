import {createStore} from 'vuex'
import axios from 'axios';

const apiUrl = "https://fakestoreapi.com/products";

const getItemToUpdate = (productsInBasket, productId) => {
    let productIndex = null;
    const product = productsInBasket.find((item, index) => {
        if (item.id === productId) {
            productIndex = index;
            return true;
        }
    });

    return {product, productIndex}
}
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
        },
        decreaseItemQuantity(state, productId) {
            const detail = getItemToUpdate(state.productsInBasket, productId);

            detail.product.quantity -= 1;

            state.productsInBasket = state.productsInBasket.filter(item => item.id !== productId);

            if (state.productsInBasket.length - 1 <= detail.productIndex)
                state.productsInBasket.push(detail.product);
            else
                state.productsInBasket.splice(detail.productIndex, 0, detail.product);
        },
        increaseItemQuantity(state, productId) {
            const detail = getItemToUpdate(state.productsInBasket, productId);
            console.log(detail);
            detail.product.quantity += 1;

            state.productsInBasket = state.productsInBasket.filter(item => item.id !== productId);

            if (state.productsInBasket.length - 1 <= detail.productIndex)
                state.productsInBasket.push(detail.product);
            else
                state.productsInBasket.splice(detail.productIndex, 0, detail.product);
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
        },

        decreaseItemQuantity({commit}, productId) {
            commit("decreaseItemQuantity", productId);
        },

        increaseItemQuantity({commit}, productId) {
            commit("increaseItemQuantity", productId);
        }
    },
    modules: {}
})
