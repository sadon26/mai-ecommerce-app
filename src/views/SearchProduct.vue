<template>
<div>
  <div class="product-found-container">
    <div v-if="loadingSearch" class="loading-searched">
      <CardLoader />
    </div>
    <div class="product-found" v-else>
      <div v-if="$route.params.product_name === 'product-not-found'">
        Product not found
      </div>

      <div v-else>

        <div ref="categoryHeading" class="product-found-heading">
          <p class="product-found-heading-text">{{ productDetails.category }}</p>
        </div>

        <div 
          @click="showProductDetails(productDetails)"
          class="product-found-wrapper" 
          :class="{'product-out-of-stock': productDetails.status === 'out_of_stock'}" 
        >
          <div class="product-found-wrapper__image">
            <img :src="productDetails.image" alt="product-image">
          </div>
          <div class="product-found-wrapper__description">
            <p class="product-found-wrapper__description__text name">{{ productDetails.product }}</p>
            <p class="product-found-wrapper__description__text"><span>Price:</span> {{ productDetails.price | toCurrency }}</p>
            <p class="product-found-wrapper__description__text"><span>Quantity:</span> {{ productDetails.quantity }}</p>
            <p class="product-found-wrapper__description__text"><span>Status:</span> 
            {{ productDetails.status === "in_stock" ? "In stock" : "Out of stock" }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <transition name="show-overview">
    <ProductOverview v-if="showProduct" @showProductOverview="showProduct = false" />
  </transition>
</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import ProductOverview from '../components/ProductOverview'
import CardLoader from '../components/CardLoader'

  export default {
    data() {
      return {
        showProduct: false,
        productName: this.$route.params.product_name
      }
    },
    components: {
      ProductOverview,
      CardLoader
    },
    computed: {
      ...mapGetters([
        'productDetails',
        'loadingSearch'
      ])
    },
    methods: {
      ...mapMutations({
        clearProductDetails: 'productDetails',
        showProductOverview: 'showProductOverview'
      }),
      showProductDetails(productDetails) {
        this.showProductOverview(productDetails);
        this.showProduct = true;
      },
    },
    created() {
      if(this.productName !== 'product-not-found') {
        this.$store.dispatch('search', this.productName);
      }
    },
    destroyed() {
      this.clearProductDetails(null);
    },
    watch: {
      productDetails(value) {
        this.$route.params.product_name = value.product
        this.$router.push(`/search/${value.product}`);
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '../assets/scss/searchProduct';

.show-overview-enter-active {
  animation: slide-cart-in .5s ease-out both;
}

.show-overview-leave-active {
  animation: slide-cart-in .5s ease-out both reverse;
}

@keyframes slide-cart-in {
  0% {
    transform: translateY(50vh);
  }
  100% {
    transform: translateY(0);
  }
}
</style>