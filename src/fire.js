import firebase from 'firebase';

    var config = {
        apiKey: "AIzaSyBi__RTW30tuDWMLUrx20HubpnYMZ__5QM",
        authDomain: "recipefinder-fa4f3.firebaseapp.com",
        databaseURL: "https://recipefinder-fa4f3.firebaseio.com",
        projectId: "recipefinder-fa4f3",
        storageBucket: "recipefinder-fa4f3.appspot.com",
        messagingSenderId: "1066639391910"
    };


var fire = firebase.initializeApp(config);

export default fire;