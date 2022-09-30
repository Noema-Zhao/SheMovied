const firebaseConfig = {
    apiKey: "AIzaSyC3xjkPu8X7a0o_3zImTuXxgb-zPavxPvs",
    authDomain: "comments-in-shemovied.firebaseapp.com",
    projectId: "comments-in-shemovied",
    storageBucket: "comments-in-shemovied.appspot.com",
    messagingSenderId: "419392806127",
    appId: "1:419392806127:web:b3947d34bd7b812f270f1a",
    measurementId: "G-V9T93HGPT3"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

var database = firebase.database();
function sendMessage() {
    // get required values to send to firebase and save to variables
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var message=document.getElementById("message").value;

    var newMessagekey=database.ref().child('comments').push().key;
    database.ref('comments/'+newMessagekey+'/Name').set(name);
    database.ref('comments/'+newMessagekey+'/Email').set(email);
    database.ref('comments/'+newMessagekey+'/message').set(message);
}


// Listen for submit
document.getElementById('conment_form').addEventListener('submit', submitForm)

// submit form
function submitForm(e) 
{
    e.preventDefault();
}

// show alert
document.querySelector('.alert').getElementsByClassName.display='block';

function hideAlert() {
    document.querySelector('.alert').getElementsByClassName.display='none';

}
// hide alert after 3 seconds
setTimeout(hideAlert, 3000);