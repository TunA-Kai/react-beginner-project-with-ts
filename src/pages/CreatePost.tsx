import { addDoc, collection } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, db } from '../firebase-config'

interface CreatePostProps {
    isAuth: boolean
}

const CreatePost: React.FC<CreatePostProps> = ({ isAuth }) => {
    const [title, setTitle] = useState('')
    const [postText, setPostText] = useState('')
    const navigate = useNavigate()
    const postsCollectionRef = collection(db, 'posts')

    useEffect(() => {
        if (!isAuth) navigate('/login')
    }, [])

    return (
        <div className='createPostPage'>
            <div className='cpContainer'>
                <h1>Create A Post</h1>
                <div className='inputGp'>
                    <label htmlFor='title'>Title:</label>
                    <input
                        onChange={e => setTitle(e.target.value)}
                        type='text'
                        placeholder='Title...'
                        name='title'
                    />
                </div>
                <div className='inputGp'>
                    <label htmlFor='post'></label>
                    <textarea
                        name='post'
                        id=''
                        placeholder='Post...'
                        onChange={e => setPostText(e.target.value)}
                    ></textarea>
                </div>
                <button onClick={createPost}>Submit Post</button>
            </div>
        </div>
    )

    async function createPost() {
        await addDoc(postsCollectionRef, {
            title,
            postText,
            author: {
                name: auth.currentUser?.displayName,
                id: auth.currentUser?.uid,
            },
        })
        navigate('/')
    }
}

export default CreatePost
