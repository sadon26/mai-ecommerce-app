<template>
  <div class="card">
    <div class="shimmerBG media"></div>
    <div class="p-32">
      <!-- <div class="shimmerBG title-line"></div> -->
      <!-- <div class="shimmerBG title-line end"></div> -->

      <div class="shimmerBG content-line m-t-24"></div>
      <div class="shimmerBG content-line"></div>
      <div class="shimmerBG content-line"></div>
      <div class="shimmerBG content-line"></div>
      <div class="shimmerBG content-line end"></div>
    </div>
    <div class="download">
      <div class="shimmerBG content-line end"></div>
      <div class="shimmerBG content-line end"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.card {
  position: relative;
  -webkit-box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 6px;
  height: 370px;
  overflow: hidden;
  /* width: 350px; */
  /* margin: 40px auto; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.shimmerBG {
  animation-duration: 2.2s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: shimmer;
  animation-timing-function: linear;
  background: #e5f0fb;
  /* background: linear-gradient(to right, #c1dceb 4%, #a3cbe1 25%, #c1dceb 36%); */
  background: linear-gradient(to right, lighten($pink, 20%) 4%, lighten($pink, 10%) 25%, lighten($pink, 20%) 36%);
  background-size: 1200px 100%;
}

.download {
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

@-webkit-keyframes shimmer {
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 100% 0;
  }
}

@keyframes shimmer {
  0% {
    background-position: -1200px 0;
  }
  100% {
    background-position: 1200px 0;
  }
}

.media {
  height: 100px;
}

.p-32 {
  padding: 32px;
}

.title-line {
  height: 24px;
  width: 100%;
  margin-bottom: 12px;
  border-radius: 20px;
}

.content-line {
  height: 8px;
  width: 100%;
  margin-bottom: 16px;
  border-radius: 8px;
}

.end {
  width: 40%;
}

.m-t-24 {
  margin-top: 24px;
}
</style>
