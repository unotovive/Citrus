<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">{{ title }}</div>
    </v-ons-toolbar>

    <v-ons-tabbar position="auto"
      :tabs="tabs"
      :visible="true"
      :index.sync="activeIndex"
    >
    </v-ons-tabbar>
  </v-ons-page>
</template>

<script>
import settingsPage from "Settings";
import mustPage from "Must";
import wantPage from "Want";
import addPage from "Add";
import signupPage from Signup;
import signinPage from Signin;

export default {
  data() {
    return {
      activeIndex: 0,
      tabs: [
        {
          icon: this.md() ? null : "pencil",
          label: "Must",
          page: mustPage
        },
        {
          icon: this.md() ? null : "child",
          label: "Want",
          page: wantPage
        },
        {
          icon: this.md() ? null : "plus",
          label: "Add",
          page: addPage
        },
        {
          icon: this.md() ? null : "ion-ios-settings",
          label: "Settings",
          page: settingsPage
        }
      ]
    };
  },
  methods: {
    md() {
      return this.$ons.platform.isAndroid();
    }
  },
  computed: {
    title() {
      return this.tabs[this.activeIndex].label;
    }
  },
  components: { mustPage, wantPage, addPage, settingsPage ,signupPage ,signinPage}
};
</script>
