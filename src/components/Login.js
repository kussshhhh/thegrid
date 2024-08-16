import React, {useState} from 'react' ;
import {useNavigate, Link} from 'react-router-dom' ;


function Login({onLogin}) {
    const [username, setUsername] = useState('') ;
    const [password, setPassword] = useState('') ;
    const navigate = useNavigate() ;

    const handleSubmit = async (e) => {
        e.preventDefault() ;
        try {
            const response = await fetch('https://localhost:3000/login', {
                method: 'POST' ,
                headers: {'Content-Type': 'application/json'} ,
                body: JSON.stringify({username, password}) ,
            })
            if(response.ok) {
                const data = await response.json() ;
                onLogin(username, data.token) ;
                navigate('/') ;
            }else{
                alert('Login failed') ;
            }
        } catch (err){
            //
            console.error('login error', err) ; 
        }
    };
    return (
        <div className='login-form'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Username'
                    value={password}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input 
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)} 
                /> 
                <button type='submit'>Login</button>
           </form>
           <Link to = '/signup' className='signup-link'>
            <button className='signup-button' > NO account? Sign up instead</button>
           </Link>



        </div>
    )
}

export default Login ;