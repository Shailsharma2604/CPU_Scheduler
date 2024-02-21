const firebaseConfig = {
    apiKey: "AIzaSyD-mh39Ck_0dBlvG3K1cvjpW6e_qXn99Fo",
    authDomain: "log-in-form-7c2b7.firebaseapp.com",
    databaseURL: "https://log-in-form-7c2b7-default-rtdb.firebaseio.com",
    projectId: "log-in-form-7c2b7",
    storageBucket: "log-in-form-7c2b7.appspot.com",
    messagingSenderId: "216258723522",
    appId: "1:216258723522:web:87cb99c1b6298b7bf4855b"
};


firebase.initializeApp(firebaseConfig);


var loginFormDB = firebase.database().ref("loginform");

document.getElementById('loginform').addEventListener('submit',submitform);

function submitform(e){
    e.preventDefault();
    var Name_CA=getElementVal('Name_CA');
    var Email_CA=getElementVal('Email_CA');
    var Password_CA=getElementVal('Password_CA');
    var Name_SI=getElementVal('Name_SI');
    var Password_SI=getElementVal('Password_SI');

    saveMessages(Name_CA,Email_CA,Password_CA,Name_SI,Password_SI);

}

const saveMessages =(Name_CA,Email_CA,Password_CA,Name_SI,Password_SI)=>{
    var newloginform = loginFormDB.puch();

    newloginform.set({
        Name_CA:Name_CA,
        Email_CA:Email_CA,
        Password_CA:Password_CA,
        Name_SI:Name_SI,
        Password_SI:Password_SI,
    })
};

const getElementVal= (id) =>{
    return document.getElementById(id).value;
};