import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import {toggleGptSearchView } from '../utils/gptSlice'
import { SUPPORTED_LANGUAGES } from '../utils/constants'
import {changeLanguage} from '../utils/configSlice'

const Header = () => {
  const navigate=useNavigate()
  const user=useSelector(store=>store.user)
  const dispatch=useDispatch()
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch)


  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
    }).catch((error) => {
      navigate("/error")
    });
  }

  useEffect(() => {
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when component unmounts
    return ()=>unsubscribe();
    
  }, []);
    
  const handleGptSearchClick=()=>{

    dispatch(toggleGptSearchView())

  }

  const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value));
  }

  return (
     <div className='absolute w-full px-8 py-3 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between '>
        <img className='w-48 mx-auto md:mx-0' src="logo2.png" alt="logo" />
   {user && <div className='flex justify-between gap-3 p-2'>
   { showGptSearch && <select className='p-2 m-2 bg-gray-800 rounded-lg text-white ' onChange={handleLanguageChange}>
      {SUPPORTED_LANGUAGES.map(lang=>(<option value={lang.identifier} key={lang.identifier}>{lang.name}</option>))}
    </select>}
    <button className='py-2 px-4 mx-4 my-2 font-semibold bg-purple-600 text-white rounded-lg 
    ' onClick={handleGptSearchClick}> {showGptSearch?"HomePage":"GPT Search"}</button>
          <img className='hidden md:block w-14 h-14 rounded-3xl ' src={user?.photoURL} alt="avatar" />
          <button onClick={handleSignOut} className='font-bold rounded-2xl bg-orange-600 text-yellow-300 p-2 '>Sign Out</button>
    </div>}
    </div>

   
  )
}

export default Header


