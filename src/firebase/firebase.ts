import { initializeApp } from 'firebase/app';
import { getToken, getMessaging } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: process.env['REACT_APP_FIREBASE_API_KEY'],
  authDomain: process.env['REACT_APP_FIREBASE_AUTH_DOMAIN'],
  projectId: process.env['REACT_APP_FIREBASE_PROJECT_ID'],
  storageBucket: process.env['REACT_APP_FIREBASE_STORAGE_BUCKET'],
  messagingSenderId: process.env['REACT_APP_FIREBASE_MESSAGING_SENDER_ID'],
  appId: process.env['REACT_APP_FIREBASE_APP_ID'],
};

const app = initializeApp(firebaseConfig);
let messaging = getMessaging(app);

export const getFcmToken = async () => {
  if (Notification.permission !== 'granted') {
    throw new Error('notification permission denied');
  }

  try {
    const token = await getToken(messaging, {
      vapidKey: process.env['REACT_APP_FIREBASE_VAPID_KEY'],
    });
    if (token) console.log('fcm token: ', token);
    else {
      throw new Error('get fcm token failed');
    }

    // onMessage(messaging, (payload) => {
    //   console.log('메시지가 도착했습니다.', payload);
    //   // ...
    // });

    return token;
  } catch (e) {
    console.log('getToken fail', e);
    throw e;
  }
};
