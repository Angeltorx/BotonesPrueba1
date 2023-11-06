const form = document.getElementById('contactForm');
const alert = document.querySelector(".alert");

const firebaseConfig = {
    apiKey: "AIzaSyBniX21ZJr4081lkU1v6ePkWbeeq2YSoSU",
    authDomain: "dealer-appointment-records.firebaseapp.com",
    databaseURL: "https://dealer-appointment-records-default-rtdb.firebaseio.com",
    projectId: "dealer-appointment-records",
    storageBucket: "dealer-appointment-records.appspot.com",
    messagingSenderId: "282237431843",
    appId: "1:282237431843:web:412e28c4caa96c49bd0196",
    measurementId: "G-0LMGCH99RM"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const ref = database.ref('messages');

form.addEventListener("submit",(e)=>{

    e.preventDefault();
    const name = document.getElementById('dealerName').value;
    const lastname = document.getElementById('lastname').value;

    ref.push({
        name:name,
        lastname:lastname
    })

    alert.style.display="block"

    setTimeout(() => {
        alert.style.display="none"
    }, 2000);
    form.reset();
});

//link del video falta corregir las opciones
//https://www.youtube.com/watch?v=bf4eSzGC-FE