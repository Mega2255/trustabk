// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMqo0zGeRuoI5AZoSJTYDCwQQRwFlZKDM",
  authDomain: "data-link-fa213.firebaseapp.com",
  databaseURL: "https://data-link-fa213-default-rtdb.firebaseio.com",
  projectId: "data-link-fa213",
  storageBucket: "data-link-fa213.firebasestorage.app",
  messagingSenderId: "534113759144",
  appId: "1:534113759144:web:0ace51858c2abb7571f79d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = firebase.auth();

// Initialize Firebase Realtime Database
const database = firebase.database();

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { auth, database };
}