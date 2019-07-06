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
        <legend>START YOUR FREE ACCOUNT</legend>
        <form>
          <div class="form-group">
            <label for="Name" class="form-top-legend">Name</label>
            <input type="text" class="form-control" id="Name">
          </div>
          <div class="form-group">
            <label for="email" class="form-top-legend">Email</label>
            <input type="email" class="form-control" id="email">
          </div>
          <div class="form-group">
            <label for="pwd" class="form-top-legend">Password</label>
            <input type="password" class="form-control" id="pwd">
          </div>
          <div class="row">
            <div class="col-md-3">
              <button class="btn btn-warning">Sign up</button>
            </div>
            <div class="col-md-9 text-right">
              <span class="form-top-legend">Already have an account? </span> <a href="/#/login"> LOG IN</a>
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
  name: 'SignUp',
  components: {
    AppHeader
  },
  data () {
    return {
      
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
