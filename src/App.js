import { useEffect, useState } from 'react';
import './App.css';
import { db } from './config/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import React from 'react';
import Container from 'react-bootstrap/Container';

function App() {
  const [user, setUser] = useState({
    name: '',
    mobile: '',
    website: '',
    whatsapp: '',
    linkedin: '',
    twitter: '',
    email: '',
    instagram: '',
    medium: '',
    youtube: '',
    discord: '',
    onlyfans: '',
    snapchat: '',
    telegram: '',
    location: '',
    skype: '',
    title: '', // Added "title" field
  });

  const socialLinks = [
    { id:1, userInfo: user.mobile, medium: 'Mobile', imageSrc: '/phone.png', hypelink: `tel:${user.mobile}` },
    { id:2, userInfo: user.whatsapp, medium: 'WhatsApp', imageSrc: '/whatsapp.png', hypelink: `https://wa.me/${user.whatsapp}` },
    { id:3, userInfo: user.facebook, medium: 'Facebook', imageSrc: '/facebook.png', hypelink: `https://www.facebook.com/${user.facebook}`},
    { id:4, userInfo: user.website, medium: 'Website', imageSrc: '/website.png', hypelink: user.website},
    { id:5, userInfo: user.instagram, medium: 'Instagram', imageSrc: '/instagram.png', hypelink: `https://www.instagram.com/${user.instagram}`},
    { id:6, userInfo: user.linkedin, medium: 'LinkedIn', imageSrc: '/linkedin.png', hypelink: `https://www.linkedin.com/in/${user.linkedin}`},
    { id:7, userInfo: user.twitter, medium: 'Twitter', imageSrc: '/twitter.png', hypelink: `https://www.twitter.com/${user.twitter}`},
    { id:8, userInfo: user.medium, medium: 'Medium', imageSrc: '/medium.png', hypelink: user.medium},
    { id:9, userInfo: user.youtube, medium: 'Youtube', imageSrc: '/youtube.png', hypelink: user.youtube},
    { id:10, userInfo: user.discord, medium: 'Discord', imageSrc: '/discord.png', hypelink: user.discord},
    { id:11, userInfo: user.onlyfans, medium: 'Onlyfans', imageSrc: '/onlyfans.png', hypelink: user.onlyfans},
    { id:12, userInfo: user.snapchat, medium: 'Snapchat', imageSrc: '/discord.png', hypelink: `https://www.snapchat.com/add/${user.snapchat}`},
    { id:13, userInfo: user.location, medium: 'Location', imageSrc: '/location.png', hypelink: user.location},
    { id:14, userInfo: user.skype, medium: 'Skype', imageSrc: '/skype.png', hypelink: `skype:${user.skype}?chat`},
  ];

  const { docId } = useParams();

  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await getDoc(doc(db, "users", docId));
        setUser(data.data());
      } catch (err) {
        console.error(err);
      }
    };

    getUser();
  }, []);

  const downloadContact = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${user.name}
TEL;TYPE=CELL:${user.mobile}
EMAIL:${user.email}
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'my_contact.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container>
      <div className="App">
        <div className="card-section">
          <div className="card">
            {user && (
              <>
                <img src="/profile.png" alt="Profile" className="profile-picture" />
                <h2 className="profile-name">{user.name}</h2>
                <p className="profile-title">{user.title}</p>
                <button className="save-contact-btn" onClick={downloadContact}>
                  Save my contact
                </button>
              </>
            )}
          </div>
        </div>

        {user && (
          <div className="social-links-container">
            <ul className="social-links">
              {socialLinks.map(item => {
                return (
                  <div key={item.id}>
                    {item.userInfo && (
                      <li>
                        <a href={item.hypelink}>
                          <img src={item.imageSrc} alt={item.medium} />
                        </a>
                      </li>
                    )}
                  </div>);
              })};
            </ul>
          </div>
        )}
      </div>
    </Container>
  );
}

export default App;
