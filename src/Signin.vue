<template>
  <div class="signin">
    <h2>Sign in</h2>
    <input type="text" placeholder="Username" v-model="username">
    <input type="password" placeholder="Password" v-model="password">
    <button @click="signIn">Signin</button>
    <p>You don't have an account? 
      <v-ons-button @click="push">CreateAccount</v-ons-button>
    </p>
  </div>
</template>

<script>
import firebase from "firebase";
import Signup from "./Signup.vue";
export default {
  name: "Signin",
  data: function() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    push() {
      this.$emit("push-page", test2);
    },
    signIn: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.username, this.password)
        .then(
          user => {
            alert("Success!");
            this.$router.push("/");
          },
          err => {
            alert(err.message);
          }
        );
    }
  }
};
</script>

<style scoped>
h1,
h2 {
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
.signin {
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
input {
  margin: 10px 0;
  padding: 10px;
}
</style>