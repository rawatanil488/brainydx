<template>
<div>
  <b-navbar type="light" variant="light">
    <b-navbar-brand href="#" class="mr-auto"><img src="../assets/logo.png" height="50px" /></b-navbar-brand>
    <!--center aligned nav items-->
    <b-navbar-nav class="ml-auto mr-auto">
      <b-nav-item>
        WELCOME TO TWITTER BY BRAINYDX
      </b-nav-item>
    </b-navbar-nav>
    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      <b-nav-item>
        <button :class="[(activePage === 'n') ? 'btn btn-outline-warning' : 'btn btn-warning']" @click="login">Log In</button>
      </b-nav-item>
      <b-nav-item>
        <button :class="[(activePage === 'up') ? 'btn btn-outline-warning' : 'btn btn-warning']" @click="signup">Sign Up</button>
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</div>
</template>
<script>
export default {
  name: 'AppHeader',
  data () {
    return  {
      activePage: this.$route.path.substr(5)
    }
  },
  methods: {
    login () {
      this.$router.push('/login')
    },
    signup () {
      this.$router.push('/signup')
    }
  }
}
</script>
<style>
  .Header-css {
    background-color: rgb(3, 49, 30);
    height: 50px;
    color: #ffffff;
    margin: 0px;
  }
  .link-font {
    color: #ffffff;
  }
  a:hover {
    color: #ffffff;
    text-decoration: none;
  }
</style>
