import { useState } from 'react'
import SignUp from './SignUp';
import Login from './Login';
import { Button } from '@/components/ui/button';
import './Auth.css';

const Auth = () => {
    const [active,setActive]=useState(true);
    // true->shows signUp page & false -> login page
  return (
    <div className='loginContainer'>
        <div className='box h-[30rem] w-[25rem]'>
            <div className='minContainer login'>
                {<div className='loginBox w-full px-10 space-y-5'>

                    {active?<SignUp/>:<Login/>}

                <div>
                    <span>alredy have accout?</span>
                    <Button onClick={()=>setActive(!active)} variant="ghost" >
                    {active?"signin":"signup"}
                    </Button>
                </div>
                </div> }
            </div>
        </div>
       
    </div>
  )
}

export default Auth
