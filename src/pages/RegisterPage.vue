<template>
  <MyHeader></MyHeader>
  <main class="registration-main">
    <div id="login" class="registarion-container">
      <h1>Registration</h1>
      <input
        class="registration__input"
        type="text"
        name="username"
        v-model="input.username"
        placeholder="Username"
      />
      <input
        class="registration__input"
        type="text"
        name="email"
        v-model="input.email"
        placeholder="Email"
      />
      <input
        class="registration__input"
        type="password"
        name="password"
        v-model="input.password"
        placeholder="Password"
      />
      <input
        class="registration__input"
        type="password"
        name="password"
        v-model="input.repeatedPassword"
        placeholder="Repeated Password"
      />
      <p class="registration__text">
        Already have an account? You can log in <a href="/login">here</a>
      </p>
      <button class="registration__button" type="button" @click="check()">
        Login
      </button>
    </div>
  </main>
  <MyFooter></MyFooter>
</template>

<script>
import MyHeader from '/src/components/MyHeader.vue';
import MyFooter from '/src/components/MyFooter.vue';
import customerDataService from '../services/customerDataService';
export default {
  name: 'RegisterPage',
  components: { MyFooter, MyHeader },

  data() {
    return {
      input: {
        username: '',
        email: '',
        password: '',
        repeatedPassword: '',
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
    register() {
      const data = {
        name: this.input.username,
        email: this.input.email,
        password: this.input.password,
      };
      customerDataService.create(data).catch((e) => {
        console.log(e);
      });
      this.retrieveCustomers();
      alert('you were successfully registered!');
    },
    check() {
      if (
        this.input.email === '' ||
        this.input.password === '' ||
        this.input.repeatedPassword === '' ||
        this.input.username === ''
      ) {
        alert('Not all fields are presented');
        return;
      }
      if (this.input.password !== this.input.repeatedPassword) {
        alert('password mismatch');
        return;
      }
      for (const customer of this.customers) {
        if (this.input.email === customer.email) {
          alert('email is taken');
          return;
        }
      }
      this.register();
      for (const customer of this.customers) {
        if (
          this.input.email === customer.email &&
          this.input.password === customer.password
        ) {
          localStorage.setItem('authenticated', JSON.stringify(true));
          localStorage.setItem('currentCustomer', JSON.stringify(customer));
          window.location.href = '/';
        }
      }
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
.registarion-container {
  display: flex;
  width: 40%;
  flex-direction: column;
  padding: 30px;
  align-items: center;
  gap: 20px 0;
  background-color: white;
  border: none;
  border-radius: 10px;
  box-shadow: 4px 2px 10px 2px rgba(38, 62, 80, 0.16);
}
.registration-main {
  padding: 100px;
  background-color: #8ebfb1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.registration__input {
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
.registration__text {
  font-size: 16px;
}

.registration__button {
  width: 200px;
  height: 50px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #038c7f;
}
</style>
