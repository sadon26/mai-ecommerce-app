<template>
<div class="categories__wrapper">
  <div class="categories">
    <div v-if="loadingCategorySpinner" class="loading-cat">
      <!-- <img src="../assets/images/Ellipsis-spinner.svg" alt="ellipsis-spinner"> -->
      <CardLoader v-for="(n, index) in 6" :key="index" />
    </div>

    <div 
    :style="{ display: productsInCategory ? 'block' : 'none' }"
      ref="categoryHeading" 
      class="category-heading"
    >
      <p class="category-heading-text" v-if="productsInCategory">{{ productsInCategory[0].category }}</p>
    </div>

    <div class="category-name__products">
      <div 
        @click="data.status !== 'out_of_stock' ? displayProductDetails(data) : null" 
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
          <p class="category-name__product__description__text"><span>Status:</span> 
          {{ data.status === "in_stock" ? "In stock" : "Out of stock" }}
          </p>
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
  <transition name="show-overview">
    <ProductOverview v-if="showProductDetails" @showProductOverview="showProductDetails = false" />
  </transition>
</div>
</template>

<script>
import ProductOverview from '../components/ProductOverview'
import CardLoader from '../components/CardLoader'
import { mapGetters, mapMutations } from 'vuex';

export default {
  data() {
    return {
      showProductDetails: false,
      categoryName: this.$route.params.id,
    }
  },
  components: {
    CardLoader,
    ProductOverview,
  },
  computed: {
    ...mapGetters([
      'productsInCategory',
      'errorGettingProduct',
      'loadingCategorySpinner',
    ])
  },
  methods: {
    ...mapMutations([
      'showProductOverview'
    ]),
    displayProductDetails(data) {
      this.showProductOverview(data)
      this.showProductDetails = true
    },
    styleCatHeading(category) {
      const { categoryHeading } = this.$refs;
      let backgrounds = [
        { name: 'Pet Supplies', class: 'category-heading-bg-pet' },
        { name: 'Supplements', class: 'category-heading-bg-supp' },
        { name: 'Sexual Performance drugs', class: 'category-heading-bg-sexp' },
        { name: 'Antibiotics', class: 'category-heading-bg-antib' }
      ]
      if(category) {
        let background = backgrounds.find(bg => bg.name === this.categoryName);
        backgrounds.forEach(bg => {
          categoryHeading.classList.remove(bg.class) 
        });
        categoryHeading.classList.add(background.class);
      }
    }
  },
  mounted() {
    this.styleCatHeading(this.productsInCategory[0])
  },
  watch: {
    $route() {
      this.categoryName = this.$route.params.id;
    },
    productsInCategory(category) {
      this.styleCatHeading(category)
    }
  }
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