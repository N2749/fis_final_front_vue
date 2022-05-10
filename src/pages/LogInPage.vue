<template>
  <MyHeader></MyHeader>
  <main>
    <div id="login">
      <h1>Login</h1>
      <input type="text" name="email" v-model="input.email" placeholder="Email" />
      <input type="password" name="password" v-model="input.password" placeholder="Password" />
      <p>Don't have an account? You can register <a href="/register">here</a></p>
      <button type="button" @click="check()">Login</button>
    </div>
  </main>
  <MyFooter></MyFooter>
</template>

<script>
import MyHeader from "/src/components/MyHeader.vue";
import MyFooter from "/src/components/MyFooter.vue";
import customerDataService from "../services/customerDataService";
export default {
  components: {MyFooter, MyHeader},

  data() {
    return {
      input: {
        email: "",
        password: ""
      },
      customers: null,
      currentCustomer: null,
    }
  },
  methods: {
    retrieveCustomers() {
      customerDataService.getAll()
          .then((response) => {
            this.customers = response.data;
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
    },
    check() {
      if(this.input.email === "" && this.input.password === "") {
        alert("A username and password must be present");
        return;
      }
      for (const customer of this.customers) {
        if(this.input.email === customer.email && this.input.password === customer.password) {
          this.login(customer);
          break;
        }
        alert("The username and / or password is incorrect");
      }
    },
    login(customer) {
      localStorage.setItem("authenticated", JSON.stringify(true));
      localStorage.setItem("currentCustomer", JSON.stringify(customer));
      window.location.href = "/";
    }
  },
  mounted() {
    this.retrieveCustomers();
    if (localStorage.getItem("authenticated") === null) {
      localStorage.setItem("authenticated", JSON.stringify(false));
    }
  }
}
</script>

<style scoped>
main {
  height: 1500px;
}
#login {
  width: 500px;
  border: 1px solid #CCCCCC;
  background-color: #FFFFFF;
  margin: 200px auto auto;
  padding: 20px;
}
</style>
