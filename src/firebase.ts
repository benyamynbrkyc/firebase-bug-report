import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDXk9mEsZDvT-vom3RQwCnkWX5Wuct2tJQ',
  authDomain: 'test-1d15e.firebaseapp.com',
  projectId: 'test-1d15e',
  storageBucket: 'test-1d15e.appspot.com',
  messagingSenderId: '2398299160',
  appId: '1:2398299160:web:afc94ec68972d7a4f3cf6d',
  measurementId: 'G-4EZ4DXD3PF',
};
app.initializeApp(config);

export const firebase = app;
export const db = app.firestore();
export const auth = app.auth();

// export const storageRef = app.storage().ref();
// export const usersRef = db.collection('users');
// export const allListingsRef = db.collection('allListings');
// export const roomsRef = db.collection('chatRooms');

// export const filesRef = storageRef.child('files');

// export const dbTimestamp = firebase.firestore.FieldValue.serverTimestamp();
// export const deleteDbField = firebase.firestore.FieldValue.delete();
