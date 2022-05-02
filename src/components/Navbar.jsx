import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./style.css"
import { auth } from './config';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
const Navbar = () => {
const [menu, setMenu] = useState(false)
const showMenu = ()=>setMenu(!menu)

const googleSignInWithGoogle = ()=>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((re)=>{
        console.log(re);
        })
        .catch((err)=>{
        console.log(err);
        })
        }
    
    return (
        <div className='Navbar w-100 '>
            <div className="container-md d-flex justify-content-between align-items-sm-center" >
                <div className="Hamburger">
                    <i onClick={showMenu} class="bi bi-list text-white size"></i>
                </div>
                <div className="menuBar text-decoration-none">
                    <Link className='text-decoration-noneml-3 mr-3' to="/">
                        <a >Home</a>
                        </Link>
                    <Link to="/Groups">  <a >News</a></Link>
                    <Link to="/schedule">  <a>Schedules</a></Link>
                    <Link to="/Teams">  <a>Contact</a></Link>
                    <Link to="/Store">  <a>Our team</a></Link>
                </div>
                <div className="Profil d-flex">
                    <div className="profilImg">
                    <button class="social-signin google" onClick={googleSignInWithGoogle}>Log in with Google+</button>
                    </div>
                </div>
                <div className={menu ? 'open-menu active' : 'open-menu'} onClick={(e)=> e.stopPropagation} >
                    <ul className='ulMenu' >
                        <li> 
                            <Link to="/"> Home</Link></li>
                            <li>
                            <Link to="/schedule">Schedule</Link> </li>
                            <li>
                            <Link to="/groups">Groups</Link> </li>
                            <li>
                            <Link to="/teams">Teams</Link> </li>
                            <li>
                            <Link to="/store">Store</Link> </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

  export default Navbar;