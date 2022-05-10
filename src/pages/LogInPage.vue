<template>
  <MyHeader></MyHeader>
  <div class="login-wrapper">
    <div id="login" class="login-container">
      <h1>Login</h1>
      <input
        class="login__input"
        type="text"
        name="email"
        v-model="input.email"
        placeholder="Email"
      />
      <input
        class="login__input"
        type="password"
        name="password"
        v-model="input.password"
        placeholder="Password"
      />
      <p class="login__text">
        Don't have an account? You can register <a href="/register">here</a>
      </p>
      <button class="login__button" type="button" @click="check()">
        Login
      </button>
    </div>
  </div>
  <MyFooter></MyFooter>
</template>

<script>
import MyHeader from '/src/components/MyHeader.vue';
import MyFooter from '/src/components/MyFooter.vue';
import customerDataService from '../services/customerDataService';
export default {
  components: { MyFooter, MyHeader },

  data() {
    return {
      input: {
        email: '',
        password: '',
      },
      customers: null,
      currentCustomer: null,
    };
  },
  methods: {
    retrieveCustomers() {
      customerDataService
        .getAll()
        .then((response) => {
          this.customers = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    check() {
      if (this.input.email === '' && this.input.password === '') {
        alert('A username and password must be present');
        return;
      }
      for (const customer of this.customers) {
        if (
          this.input.email === customer.email &&
          this.input.password === customer.password
        ) {
          this.login(customer);
          break;
        }
        alert('The username and / or password is incorrect');
      }
    },
    login(customer) {
      localStorage.setItem('authenticated', JSON.stringify(true));
      localStorage.setItem('currentCustomer', JSON.stringify(customer));
      window.location.href = '/';
    },
  },
  mounted() {
    this.retrieveCustomers();
    if (localStorage.getItem('authenticated') === null) {
      localStorage.setItem('authenticated', JSON.stringify(false));
    }
  },
};
</script>

<style scoped>
.login-wrapper {
  background-color: #8ebfb1;
  padding: 100px;
  display: flex;
  justify-content: center;
}

.login-container {
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px 0;
  padding: 40px;
  background-color: white;
  border: none;
  border-radius: 10px;
  box-shadow: 4px 2px 10px 2px rgba(38, 62, 80, 0.16);
}

.login__input {
  width: 70%;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  color: #3c5956;
  background-color: #e4f2f1;
}

.login__input:focus {
  outline: none;
}

.login__text {
  font-size: 16px;
}

.login__button {
  width: 200px;
  height: 50px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #038c7f;
}
</style>
