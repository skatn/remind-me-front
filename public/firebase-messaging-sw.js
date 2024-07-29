importScripts(
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js',
);
importScripts(
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js',
);

firebase.initializeApp({
  apiKey: 'AIzaSyDipH9vyupGIGA9KZeRW9dwLEjD0BmmgHE',
  authDomain: 'remind-me-425810.firebaseapp.com',
  projectId: 'remind-me-425810',
  storageBucket: 'remind-me-425810.appspot.com',
  messagingSenderId: '428311157446',
  appId: '1:428311157446:web:b1ed74446a44a7e5c9d5c7',
});

let messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
