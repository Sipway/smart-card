import { useEffect, useState } from 'react';
import './App.css';
import { Auth } from './components/auth';
import { db } from './config/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />


function App() {
  const [user, setUser] = useState(null);
  const { docId } = useParams();
  const docRef = doc(db, 'users', docId);

  useEffect(() => {
    const getUser = async () => {
      try {
        const docSnapshot = await getDoc(docRef);
        if (docSnapshot.exists()) {
          const userData = docSnapshot.data();
          setUser(userData);
        } else {
          console.log('Document does not exist');
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    getUser();
  }, [docRef]);

  return (
    <div className="App">
      {/* <Auth /> */}
      {user && (
        <div className="profile-container">
          <div className="profile-header">
            <img className="profile-image" src={user.profilePic} alt="Profile" />
            <h2 className="profile-name">{user.name}</h2>
          </div>
          <div className="profile-links">
            <a href={`https://wa.me/${user.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href={user.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href={user.twitter} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href={user.website} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-globe"></i>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
