<template>
<div>
  <AppHeader />
  <div class="container">
    <div class="row mt-3">
      <div class="col-md-6">
        <img src="../assets/home.png" height="480px" width="570px" />
      </div>
      <div class="col-md-6 login-up-form p-5">
        <legend class="form-top-legend">WELCOME TO BRAINYDX</legend>
        <legend>Welcome back</legend>
        <form>
          <div class="form-group">
            <label for="email" class="form-top-legend">Email</label>
            <input type="email" class="form-control" id="email" v-model="email">
          </div>
          <div class="form-group">
            <label for="pwd" class="form-top-legend">Password</label>
            <input type="password" class="form-control" id="pwd" v-model="password">
          </div>
          <div class="row">
            <div class="col-md-3">
              <button class="btn btn-warning" @click="submitLoginCred">Log in</button>
            </div>
            <div class="col-md-9 text-right">
              <span class="form-top-legend">New User ?</span> <a href="/#/signup"> Sign Up </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import AppHeader from './AppHeader'

export default {
  name: 'Login',
  components: {
    AppHeader
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    submitLoginCred () {
      const data = {
        email: this.email,
        password: this.password
      }
      const body = JSON.stringify(data)
      this.$store.dispatch('login', body)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-up-form {
  background-color: rgb(255, 255, 156); 
  text-align: start !important;
}

.form-top-legend{
  color: grey;
  font-size: 12px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
