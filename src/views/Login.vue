<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>LOGIN</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-button @click="login">
        login
      </ion-button>
      <br />
      <br />
      <ion-button @click="logout">
        logout
      </ion-button>
      <br />
      <br />
      <ion-button @click="testDB">
        test
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from '@ionic/vue';
import { defineComponent } from 'vue';
import firebase from 'firebase';

import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Login',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
  },
  setup() {
    const email = 'benjamin.brkic.a@gmail.com';
    const password = '123456';

    firebase.initializeApp({
      apiKey: 'AIzaSyDXk9mEsZDvT-vom3RQwCnkWX5Wuct2tJQ',
      authDomain: 'test-1d15e.firebaseapp.com',
      projectId: 'test-1d15e',
      storageBucket: 'test-1d15e.appspot.com',
      messagingSenderId: '2398299160',
      appId: '1:2398299160:web:afc94ec68972d7a4f3cf6d',
      measurementId: 'G-4EZ4DXD3PF',
    });
    const auth = firebase.auth();

    const router = useRouter();

    const login = async () => {
      await auth.signInWithEmailAndPassword(email, password);
      console.log('got user: ', auth.currentUser);
      console.log('going to /home');
      //   This has the same behavior even when there is
      //   no router and no route changing
      router.replace('/home');
    };

    const logout = async () => {
      await auth.signOut();
      console.log(auth.currentUser);
    };

    const testDB = () => {
      firebase
        .firestore()
        .collection('testCollection')
        .doc('testDoc')
        .set({
          title: 'Test',
        });
    };

    return {
      login,
      logout,
      testDB,
    };
  },
});
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
