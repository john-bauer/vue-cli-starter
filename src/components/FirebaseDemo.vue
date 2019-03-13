<template>
  <div class="c-firebase-demo">
    <section class="section">
      <div class="container">
        <div class="notification is-success" v-if="alerts.success.show">
          <button class="delete" v-on:click="hide('success')"></button>
          ✅ Firebase is connected successfully to your app.
        </div>
        <div class="notification is-danger" v-if="alerts.fail.show">
          <button class="delete" v-on:click="hide('fail')"></button>
          ⚠️ Your app is not connected to firebase. In order to set up your
          project, follow the steps below.
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'FirebaseDemo',
  data() {
    return {
      title: 'Firebase Demo',
      firebaseIsConnected: true,
      alerts: {
        success: {
          show: true,
          message: '✅ Firebase is connected successfully to your app'
        },
        fail: {
          show: true,
          message:
            '⚠️ Your app is not connected to firebase. In order to set up your project, follow the steps below.'
        }
      }
    };
  },
  methods: {
    hide(state) {
      this.alerts[state].show = false;
    },
    checkFirebase() {
      console.log(this.title);
    }
  }

  // TODO: check firebase and show appropriate alert, update firebaseIsConnected
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
