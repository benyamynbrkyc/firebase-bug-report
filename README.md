I am developing an app which makes use of Firebase Authentication and Firestore. However, I came across a weird bug where my app starts sending infinite requests for the authorization token. The weird thing is, all the requests come back with a 200 OK status code. They're all successful and I can see the response in the Chrome Network tab.

The requests keep getting fired until they reach the max quota (around 200 I think). Then Firebase signs me out and fails on the last request, with a response message saying 'quota exceeded'.

I even made a small app to reproduce this issue and I have been able to reproduce it in it's entirety. The app has a home view and a login view (buttons: log in, log out, test db - makes a Firestore call to write some sample data).

The infinite token loop stops only when I manually sign out the user or the quota gets exceeded.

I am using Ionic Framework, Vue and Firebase.
