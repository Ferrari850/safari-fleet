importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDjWe25C9d11DF3doLdVqrQVmp6I4ZbVbo",
  authDomain: "safari-fleet.firebaseapp.com",
  projectId: "safari-fleet",
  storageBucket: "safari-fleet.firebasestorage.app",
  messagingSenderId: "780563344208",
  appId: "1:780563344208:web:c9b8f4aa2eea92cfd0da55",
  measurementId: "G-4E6QHK5TCT"
});

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('Background message received:', payload);
  const title = payload.notification?.title || 'Safari Fleet';
  const body = payload.notification?.body || '';
  const options = {
    body,
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    vibrate: [200, 100, 200],
    data: payload.data || {}
  };
  self.registration.showNotification(title, options);
});

// Handle notification click
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/')
  );
});
