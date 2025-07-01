console.log("🔥 Script v3 loaded!");

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyA4fP8GeCEpWTd7myDCZ6Vi4GmkwuwRTMY",
    authDomain: "afrotious-nation-v2.firebaseapp.com",
    projectId: "afrotious-nation-v2",
    storageBucket: "afrotious-nation-v2.appspot.com",
    messagingSenderId: "1010699046283",
    appId: "1:1010699046283:web:87f330b58db11dc894f38e"
  };

  firebase.initializeApp(firebaseConfig);
}

const functions = firebase.functions();
const setAdminRole = functions.httpsCallable("setAdminRole");

setAdminRole({ email: "steelebuildingfoundation@gmail.com" })
  .then(res => console.log("✅", res.data.message))
  .catch(err => console.error("❌ Error:", err));
