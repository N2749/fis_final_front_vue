<template>
  <MyHeader></MyHeader>
  <main>
    <div id="login">
      <h1>Register</h1>
      <input type="text" name="username" v-model="input.username" placeholder="Username" />
      <input type="text" name="email" v-model="input.email" placeholder="Email" />
      <input type="password" name="password" v-model="input.password" placeholder="Password" />
      <input type="password" name="password" v-model="input.repeatedPassword" placeholder="Repeated Password" />
      <p>Already have an account? You can log in <a href="/login">here</a></p>
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
  name: "RegisterPage",
  components: {MyFooter, MyHeader},

  data() {
    return {
      input: {
        username: "",
        email: "",
        password: "",
        repeatedPassword: "",
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
    register(){
      const data = {
        name: this.input.username,
        email: this.input.email,
        password: this.input.password,
      }
      customerDataService.create(data)
          .catch((e) => {
            console.log(e);
          });
      this.retrieveCustomers();
      alert("you were successfully registered!");
    },
    check() {
      if(this.input.email === ""
          || this.input.password === ""
          || this.input.repeatedPassword === ""
          || this.input.username === "") {
        alert("Not all fields are presented");
        return;
      }
      if (this.input.password !== this.input.repeatedPassword) {
        alert("password mismatch");
        return;
      }
      for (const customer of this.customers) {
        if(this.input.email === customer.email) {
          alert("email is taken");
          return;
        }
      }
      this.register();
      for (const customer of this.customers) {
        if(this.input.email === customer.email && this.input.password === customer.password) {
          localStorage.setItem("authenticated", JSON.stringify(true));
          localStorage.setItem("currentCustomer", JSON.stringify(customer));
          window.location.href = "/";
        }
      }
    },
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
