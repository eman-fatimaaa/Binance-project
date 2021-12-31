<template>
  <div>
    <!-- Just an image -->
    <nav class="navbar navbar-expand-lg color">
      <img class="navbar-img" v-bind:src="image" />
    </nav>
    <div class="navColor text-center">
      <span
        ><i class="fas fa-lock icolor"></i>
        <p>URL verification: https://accounts.binance.com</p></span
      >
    </div>
    <div class="container d-flex align-items-center">
      <div class="main mt-5">
        <form class="mt-5">
          <!-- content container-->
          <div class="container">
            <h1>Binance Account Login</h1>
            <h6>
              Welcome back! Log In with your Email, Phone number or QR code
            </h6>
            <div class="form-group">
              <label for="exampleInputEmail1">Email</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button type="submit" class="btn bg-color btn-block">Submit</button>
            <h5 class="mt-4 hColor">Forgot password</h5>
            <h5 class="hColor">Register Now</h5>
          </div>
        </form>
      </div>
      <div>
        <!-- Image Container -->
        <div class="secondDiv">
          <img class="img-fluid ml-5 qrImg mt-5" v-bind:src="qr" />
          <h5 class="text-center">Log in with QR code</h5>
          <p class="text-center">
            Scan this code with the <i class="color">Binance mobile app</i>
            to log in instantly
          </p>
        </div>
      </div>
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
  color: blue;
}
.navColor {
  background-color: rgb(253, 248, 215);
}
.hColor {
  color: rgb(208, 150, 0);
}
input {
  height: 47px;
}
</style>