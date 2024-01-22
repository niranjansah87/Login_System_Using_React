// // // import React, { useState, useEffect } from 'react';
// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // // import '../assets/profile.css'
// // import styles from '../assets/profile.module.css';
// // console.log(styles);
// // export default function Profile() {
// //   console.log(styles.update_profile);
// //   // const [userData, setUserData] = useState({
// //   //   name: '',
// //   //   email: '',
// //   //   contact: '',
// //   // });

// //   // useEffect(() => {
// //   //   const fetchUserData = async () => {
// //   //     try {
// //   //       const response = await fetch('http://localhost:5000/api/auth/getuser', {
// //   //         method: 'POST',
// //   //         credentials: 'include', // Include credentials if using cookies for authentication
// //   //       });

// //   //       if (response.ok) {
// //   //         const user = await response.json();
// //   //         setUserData(user);
// //   //       } else {
// //   //         console.error('Failed to fetch user data:', response.statusText);
// //   //       }
// //   //     } catch (error) {
// //   //       console.error('Fetch user data error:', error.message);
// //   //     }
// //   //   };

// //   //   fetchUserData();
// //   // }, []); // Empty dependency array ensures the effect runs only once when the component mounts

// //   return (
// //     <div styles={{background: url("./login.jpg");,
// //     background-repeat: no-repeat;,
// //     background-size: cover;}}>
// //     <div className={styles.update_profile}>
// //       <h1>Profile</h1>
// //       <form  action="#" encType="multipart/form-data">
// //         <div className={styles.flex}>
// //           <div className={styles.inputBox}>
// //             <span>Full name :</span>
// //             {/* <input type="text" name="update_name" value={userData.name} className="{styles.box}" disabled /> */}
// //             <input type="text" name="update_name"  className={styles.box} disabled />
// //             <span>Email :</span>
// //             {/* <input type="email" name="update_email" value={userData.email} className={styles.box disabled /> */}
// //             <input type="email" name="update_email" className={styles.box} disabled />
// //           </div>

// //           <div className={styles.inputBox}>
// //             <span>Contact Number</span>
// //             {/* <input value={userData.contact} className="{styles.box}" disabled /> */}
// //             <input className={styles.box} disabled />
// //           </div>
// //         </div>

// //         <Link to="/index" className={styles.delete_btn}>
// //           Go back
// //         </Link>
// //       </form>
// //     </div>
// //     </div>
// //   );
// // }









import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../assets/profile.module.css';

export default function Profile() {
  const myStyle = {
    background: `url(${process.env.PUBLIC_URL}/login.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '120vh',
    marginTop: '-32px',
  };

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    contact: '',
  });
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const authToken = localStorage.getItem('authToken');
        const response = await fetch('http://localhost:5000/api/auth/getuser', {
          method: 'GET',
          
          // credentials: 'include',
          credentials: 'include',
          headers: {
            'auth-token': authToken,
            'Content-Type': 'application/json', // Corrected header name
          }, // Include credentials if using cookies for authentication
        });

        if (response.ok) {
          const user = await response.json();
          setUserData(user);
        } else {
          console.error('Failed to fetch user data:', response.statusText);
        }
      } catch (error) {
        console.error('Fetch user data error:', error.message);
      }
    };

    fetchUserData();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts


  return (
    <>

      <div style={myStyle}>

        <div className={styles.update_profile}>

          <form style={{ marginTop: '140px' }} action="#" encType="multipart/form-data">
            <h1>Profile</h1>
            <div className={styles.flex}>

              <div className={styles.inputBox}>
                <span>Full name :</span>
                <input type="text" name="update_name" value={userData.name} className={styles.box} disabled />
                <span>Email :</span>
                <input type="email" name="update_email" value={userData.email} className={styles.box} disabled />
              </div>

              <div className={styles.inputBox}>
                <span>Contact Number</span>
                <input className={styles.box} value={userData.contact} disabled />
              </div>
            </div>

            <Link to="/index" className={styles.delete_btn}>
              Go back
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
