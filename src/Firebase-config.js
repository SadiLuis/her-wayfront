import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	// apiKey: '',
	// authDomain: '',
	// projectId: 'hosting-73b2e',
	// storageBucket: ,
	// messagingSenderId: ,
	// appId: ,
	// measurementId: 'G-6XQF3Y59RT',
    apiKey: "AIzaSyDORHM4e7WvAzd0qpTLhQxKT5jEzQNQlWk",
    authDomain: "her-way-rn.firebaseapp.com",
    databaseURL: "https://her-way-rn-default-rtdb.firebaseio.com",
    projectId: "her-way-rn",
    storageBucket: "her-way-rn.appspot.com",
    messagingSenderId: "79474352688",
    appId: "1:79474352688:web:ba34800215c4e2df0903f5"
  
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);