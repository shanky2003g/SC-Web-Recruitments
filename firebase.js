const firebaseConfig = {

    apiKey: "AIzaSyCoRmdj0YIIu8uwZy3zGBXSdQszxcdX1qc",

    authDomain: "feedback-form-6bca2.firebaseapp.com",

    databaseURL: "https://feedback-form-6bca2-default-rtdb.firebaseio.com",

    projectId: "feedback-form-6bca2",

    storageBucket: "feedback-form-6bca2.appspot.com",

    messagingSenderId: "515832409899",

    appId: "1:515832409899:web:9d028536c2e1fc7d509f6e"

  };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();



document.getElementById("feedbackform").addEventListener("submit",submitform);

async function submitform(e) {
  e.preventDefault()
  
   const nameInput = await document.getElementById("name");
  const nameError = await document.getElementById("nameError");
  var yourname= await getElementVal("name");
  var regno=await getElementVal("numbe");
  var phone=await getElementVal("number");
  var email=await getElementVal("email");
  var message=await getElementVal("message");
  
await db.collection("responses").add({
  name: yourname,
  regno, phone, email, message
})
location.reload();
}
const getElementVal=(id)=>{
    return document.getElementById(id).value;

}; 




