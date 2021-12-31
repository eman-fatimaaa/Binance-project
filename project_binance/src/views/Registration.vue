<template>
  <div>
    <!-- Just an image -->
    <nav class="navbar navbar-expand-lg color">
      <img class="navbar-img" v-bind:src="image" />
    </nav>
    <div class="navColor text-center">
      <span>
        <p>
          <i class="fas fa-lock icolor"></i>URL verification:
          https://accounts.binance.com
        </p></span
      >
    </div>
    <div class="container d-flex align-items-center">
      <div class="main mt-5">
        <form class="mt-5">
          <!-- content container-->
          <div class="container">
            <h1>Create Binance Account</h1>
            <h6>Register with your email or mobile</h6>
            <div class="form-group mt-5">
              <label for="exampleInputEmail1">Email</label>
              <input
                type="email"
                class="form-control height"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control height"
                id="exampleInputPassword1"
              />
            </div>

            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                I agree to receive email updates from Binance
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked
              />
              <label class="form-check-label" for="flexCheckChecked">
                I have read and agree to Binance’s <a>Terms of Service</a>
              </label>
            </div>

            <button type="submit" class="btn bg-color btn-block">
              Create Account
            </button>
            <h5 class="mt-4">
              Already Registered?
              <i class="hColor">Login</i>
            </h5>
          </div>
        </form>
      </div>
      <div></div>
    </div>
    <p class="text-center fixed-bottom">
      © 2017 - 2021 Binance.com. All rights reserved
    </p>
  </div>
</template>
<script>
export default {
  name: "navbar",
  data() {
    return {
      //data properties for image binding
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
.main {
  width: 550px;
  padding: 0px 20px;
}
.secondDiv {
  margin-left: 17%;
}
.qrImg {
  width: 280px;
}
.color {
  color: rgb(255, 217, 0);
}
.bg-color {
  background-color: rgb(250, 191, 0);
}
.icolor {
  color: green;
  padding: 10px;
}
.navColor {
  background-color: rgb(253, 248, 215);
}
.hColor {
  color: rgb(208, 150, 0);
}
.height {
  height: 50px;
}
button {
  height: 47px;
}
</style>