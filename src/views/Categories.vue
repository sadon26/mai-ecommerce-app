<template>
<div class="categories__wrapper">
  <div class="categories">
    <div v-if="loadingCategorySpinner" class="loading-cat">
      <!-- <img src="../assets/images/Ellipsis-spinner.svg" alt="ellipsis-spinner"> -->
      <CardLoader v-for="(n, index) in 6" :key="index" />
    </div>
    <p class="category-name" v-if="productsInCategory">{{ productsInCategory[0].category }}</p>
    <div class="category-name__products">
      <div 
      @click="data.status !== 'out_of_stock' ? showProductOverview(data) : null" 
      class="category-name__products-wrapper" 
      :class="{'product-out-of-stock': data.status === 'out_of_stock'}" 
      v-for="(data, index) in productsInCategory" :key="index">
        <div class="category-name__product__image">
          <img :src="data.product_image" alt="product-image">
        </div>
        <div class="category-name__product__description">
          <p class="category-name__product__description__text">{{ data.product_name }}</p>
          <p class="category-name__product__description__text"><span>Price:</span> {{ data.price | toCurrency }}</p>
          <p class="category-name__product__description__text"><span>Quantity:</span> {{ data.quantity }}</p>
          <p class="category-name__product__description__text"><span>Status:</span> {{ data.status }}</p>
        </div>
      </div>
    </div>
    <div v-if="errorGettingProduct" class="error-getting-product">
      <div class="error-getting-product__image">
        <img src="../assets/images/product-not-found.svg" alt="product-not-found">
      </div>
      <!-- <p class="error-getting-product__text">{{ errorGettingProduct }}</p> -->
    </div>
  </div>
  <ProductOverview v-if="productOverview" />
</div>
</template>

<script>
import ProductOverview from '../components/ProductOverview'
import CardLoader from '../components/CardLoader'
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    CardLoader,
    ProductOverview,
  },
  computed: {
    ...mapGetters([
      'productsInCategory',
      'errorGettingProduct',
      'loadingCategorySpinner',
      'productOverview',
    ])
  },
  methods: {
    ...mapActions([
      'showProductOverview',
    ])
  },
}
</script>

<style lang="scss">
@import '../assets/scss/categories';
.loading-cat {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 50px;
  grid-gap: 15px;
  grid-row-gap: 40px;
}
</style>