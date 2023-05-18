
import { useEffect, useState } from 'react';
import './App.css';
import { Auth } from './components/auth';
import { db } from './config/firebase';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';

function App() {
  const userRef = collection(db, "users");
  
 const [user, setUser] = useState("");
 
 const docRef = doc(db,"users","dsxFdFSZr4ZxCN6dlXup");
 console.log(docRef);

 useEffect(() => {

  const getUser = async () => {
    try{
      const data = await getDoc(docRef);
      console.log(data.data())
      setUser(data.data());
      
    }
    catch(err){
      console.error(err)
    }
    

  };

  getUser();

},
[])





 

  return (
    <div className="App">
      {/* <Auth/> */}
    {user && (
      <div>
        <h2>Profile</h2>
        <p>Name: {user.name}</p>
        <p>Mobile: {user.mobile}</p>
        <p>Website: {user.website}</p>
      </div>
    )}

    </div>
  );
}

export default App;
