<template>
  <div>
    <div class="navColor text-center">
      <p>
        Intoducing Highstreet on LaunchPool! Farm HIGH Stalking BNB and BUSD
        Tokens More
      </p>
    </div>

    <nav class="navbar navbar-expand-lg color">
      <img class="navbar-img" v-bind:src="image" />
    </nav>
    <div class="container">Hello</div>
  </div>
</template>
<script>
export default {
  name: "navbar",
  data() {
    return {
      // data properties for image binding
      image: require("@/assets/images/binance.png"),
      qr: require("@/assets/images/QRcode.webp"),
    };
  },
};
</script>
<style scoped>
.navbar-img {
  width: 170px;
}

.icolor {
  color: blue;
}
.navColor {
  background-color: rgb(253, 248, 215);
  padding-top: 10px;
}

input {
  height: 47px;
}
</style>