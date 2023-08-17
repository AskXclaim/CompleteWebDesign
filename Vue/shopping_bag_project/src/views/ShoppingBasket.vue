<template>
  <div class="basket">
    <div class="items">

      <div class="item" v-for="(product, index) in this.productsInBasket" :key="index">
        <div class="remove" @click="this.removeItem(product.id)">Remove item</div>
        <div class="photo"><img :src="product.image" :alt="product.title"></div>
        <div class="description">{{ product.title }}</div>
        <div class="price">
          <span class="quantity-area">
            <button :disabled="product.quantity===1" @click="this.decreaseItemQuantity(product.id)">-</button>
            <span class="quantity">{{ product.quantity }}</span>
            <button @click="this.increaseItemQuantity(product.id)">+</button>
          </span>
          <span class="amount">US$ {{ this.getPrice(product.price, product.quantity) }}</span>
        </div>
      </div>
      <div v-if="this.productsInBasket.length" class="grand-total"> Grand Total: US$ {{ this.getGrandTotal() }}</div>
      <div v-else class="no-grand-total">No item(s) in the basket</div>

    </div>
  </div>
</template>

<script>

import {mapState} from "vuex";

export default {
  name: 'ShoppingBasket',

  data() {
    return {}
  },
  computed: mapState(["productsInBasket"]),

  methods: {
    removeItem(productId) {
      this.$store.dispatch("removeFromBasket", productId);
    },
    getPrice(unitPrice, quantity) {
      if (unitPrice && quantity && typeof unitPrice === "number" && typeof quantity === "number")
        return (unitPrice * quantity).toFixed(2);

      return "--";
    },
    getGrandTotal() {
      // let grandTotal = 0;
      // this.productsInBasket.forEach((item) => {
      //   grandTotal += parseFloat(this.getPrice(item.price, item.quantity));
      // });

      return (this.productsInBasket.reduce((total, item) => {
        total += parseFloat(this.getPrice(item.price, item.quantity));
        return total;
      }, 0)).toFixed(2);
    },

    decreaseItemQuantity(productId) {
      this.$store.dispatch("decreaseItemQuantity", productId);
    },
    increaseItemQuantity(productId) {
      this.$store.dispatch("increaseItemQuantity", productId);
    },
  },

}
</script>

<style lang="scss">

.basket {
  padding: 60px 0;

  .items {
    max-width: 800px;
    margin: auto;

    .item {
      display: flex;
      justify-content: space-between;
      padding: 40px 0;
      border-bottom: 1px solid lightgrey;
      position: relative;

      .remove {
        position: absolute;
        top: 8px;
        right: 0;
        font-size: 11px;
        text-decoration: underline;
        cursor: pointer;
      }

      .quantity-area {
        margin: 8px auto;
        height: 14px;

        button {
          width: 16px;
          height: 16px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        .quantity {

          margin: 0 4px;
        }
      }

      .photo {
        img {
          max-width: 80px;
        }
      }

      .description {
        padding-left: 30px;
        box-sizing: border-box;
        max-width: 50%;

      }

      .price {
        .amount {
          font-size: 16px;
          margin-left: 8px;
          vertical-align: middle;

        }
      }
    }

    .grand-total {
      font-size: 24px;
      font-weight: bold;
      text-align: right;
      margin-top: 8px;
    }

    .no-grand-total {
      font-size: 24px;
      font-weight: bold;
      text-align: center;
      margin-top: 8px;
    }
  }

}

</style>
