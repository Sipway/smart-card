import { useEffect, useState } from 'react';
import './App.css';
import { db } from './config/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

function App() {
  const [user, setUser] = useState({
    name: '',
    mobile: '',
    website: '',
    whatsapp: '',
  });

  const { docId } = useParams();
  const docRef = doc(db, 'users', docId);

  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await getDoc(docRef);
        setUser(data.data());
      } catch (err) {
        console.error(err);
      }
    };

    getUser();
  }, []);

  return (
    <div className="App">
      <div className="card-section">
        <div className="card">
          {user && (
            <>
              <img src={user.profile_picture} alt="Profile" className="profile-picture" />
              <h2 className="profile-name">{user.name}</h2>
            </>
          )}
        </div>
      </div>

      <div className="social-links-container">
        <ul className="social-links">
          <li>
            <a href={user.whatsapp}>
              <img src="/whatsapp.png" alt="WhatsApp" />
            </a>
          </li>
          <li>
            <a href={user.linkedin}>
              <img src="/linkedin.png" alt="LinkedIn" />
            </a>
          </li>
          <li>
            <a href={user.twitter}>
              <img src="/twitter.png" alt="Twitter" />
            </a>
          </li>
          <li>
            <a href={user.website}>
              <img src="/website.png" alt="Website" />
            </a>
          </li>
          <li>
            <a href={user.website}>
              <img src="/phone.png" alt="call" />
            </a>
          </li>
          <li>
            <a href={user.website}>
              <img src="/email.png" alt="email" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
