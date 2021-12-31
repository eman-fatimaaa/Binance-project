<template>
  <div>
    <div class="navColor text-center">
      <p>
        Intoducing Highstreet on LaunchPool! Farm HIGH Stalking BNB and BUSD
        Tokens More
      </p>
    </div>

    <nav class="navbar bg-dark color navPadding">
      <img class="navbar-img" v-bind:src="image" />
    </nav>
    <div>
      <div class="bgColor">
        <div class="margin">
          <div class="container-fluid">
            <h1 class="pt-5">Verify Your Account</h1>
            <p class="mt-2">Get verified to achieve higher trading capacity.</p>
            <button type="submit" class="btn bg-color">Submit</button>
          </div>
        </div>

        <div class="container d-flex justify-content-around mt-5 mb-4">
          <div class="item" v-for="item in itemArray" :key="item">
            <h3>
              {{ item.currency }}
              <span class="percentage">{{ item.percentage }}</span>
            </h3>
            <strong>{{ item.rating }}</strong>
            <h6>{{ item.price }}</h6>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <div class="container mt-2">
        <i class="fas fa-volume-down"></i>
        Special Notice about Binance.com in Singapore | <a> More</a>
      </div>
      <div class="container mt-2">
        <i class="fas fa-file-image"></i> Special Notice about Binance.com in
        Singapore | <a> More</a>
      </div>
      <div class="container mt-2">
        <i class="fas fa-file-image"></i> Special Notice About Binance Markets
        Limited | <a> More</a>
      </div>
    </div>
    <div class="container mt-5">
      <h1 class="mb-5">Market Trend</h1>
      <div class="container">
        <table class="table table-borderless">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Last Price</th>
              <th scope="col">24h Change</th>
              <th scope="col">Markets</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                BNB
                <i class="currency">BNB</i>
              </th>
              <td>BNB</td>
              <td>BTC</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">
                BTC
                <i class="currency">BTC</i>
              </th>
              <td>BTC</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">
                ETH
                <i class="currency">BNB</i>
              </th>
              <td>ETH</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
          <div class="container arrowHead mt-5">
            <a>View more markets <i class="fas fa-arrow-right"></i></a>
          </div>
        </table>
      </div>
    </div>
    <div class="container d-flex d-flex-align-center mt-5">
      <h1 class="mb-4">Trade.Anywhere.</h1>
      <p>
        Compatible with multiple devices, start trading with safety and
        convenience.
      </p>

      <div></div>
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
      qr: require("@/assets/images/QRcode.webp"),
      itemArray: [
        {
          currency: "BNB/BUSD",
          rating: 2.604,
          price: "$30.00",
          percentage: "-0.78%",
        },
        {
          currency: "BNB/BUSD",
          rating: 2.604,
          percentage: "-0.78%",

          price: "$60.00",
        },
        {
          currency: "BNB/BUSD",
          rating: 2.604,
          percentage: "-0.78%",

          price: "$12.00",
        },
        {
          currency: "BNB/BUSD",

          price: "$7.00",
          percentage: "-0.78%",

          rating: 2.604,
        },
      ],
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
  padding-top: 5px;
}

input {
  height: 47px;
}
.bgColor {
  background-color: rgb(247, 247, 247);
}
.bg-color {
  background-color: rgb(250, 191, 0);
  padding: 5px 50px;
}
.margin {
  margin-left: 16%;
  margin-bottom: 8%;
}
.list-group {
  text-decoration: none;
}

.navPadding {
  margin-top: -16px;
}
.link {
  color: rgb(255, 217, 0);
}
.percentage {
  color: green;
}
.arrowHead {
  margin-left: 100%;
}
.currency {
  color: grey;
}
</style>