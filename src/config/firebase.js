import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
      // TODO: Add SDKs for Firebase products that you want to use
      // https://firebase.google.com/docs/web/setup#available-libraries
    
      // Your web app's Firebase configuration
      const firebaseConfig = {
        apiKey: "AIzaSyBFr1dQ3fqkI3hK5BvhzuKHB0D68dE2JNE",
        authDomain: "todo-reac.firebaseapp.com",
        databaseURL: "https://todo-reac-default-rtdb.firebaseio.com",
        projectId: "todo-reac",
        storageBucket: "todo-reac.appspot.com",
        messagingSenderId: "409022064845",
        appId: "1:409022064845:web:07f56d94b8fc767ac72184"
      };
    
      // Initialize Firebase
      export default firebase.initializeApp(firebaseConfig);
    