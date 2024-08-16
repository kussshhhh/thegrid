import React, {useState} from 'react' ;
import {useNavigate} from 'react-router-dom' ;

function Upload({token}) {
    const [name, setName] = useState('') ;
    const [description, setDescription] = useState('') ;
    const [websiteUrl, setWebsiteUrl] = useState('') ;
    const [price, setPrice] = useState('') ;
    const [component, setComponent] = useState('') ;
    const navigate = useNavigate() ;

    const handleSubmit = async (e) => {
        e.preventDefault() ;
        try {
            const response = await fetch('https://localhost:3000/components',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' ,
                    'Authorization': `Bearer ${token}` 
                },
                body: JSON.stringify({
                    name, 
                    description,
                    author: 'Current User',
                    rating: '0' ,
                    price,
                    component,
                    websiteUrl 
                })
            })
            if(response.ok) {
                alert('Component uploaded succesfully') ;
                navigate('/') ;
            } else {
                alert('Upload failed') ;
            }
        
        } catch (error) {
            console.error('Upload error: ', error) ;
        }
    }
    return (
        <div className='upload-form'>
            <h2>Upload Component</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Component Name' 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <textarea
                    placeholder='Description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} 
                />
                <input 
                    type='text'
                    placeholder='Website Url'
                    value={websiteUrl} 
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='Price'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <textarea
                    placeholder='Component Code'
                    value={component}
                    onChange={(e) => setComponent(e.target.value)}
                />
                <button type='submit'>Upload</button>
            </form>
        </div>
    )
}


export default Upload ;
