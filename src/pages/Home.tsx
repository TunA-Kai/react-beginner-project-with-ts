import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { auth, db } from '../firebase-config'

interface HomeProps {
    isAuth: boolean
}

const Home: React.FC<HomeProps> = ({ isAuth }) => {
    const [postLists, setPostLists] = useState([] as any[])
    const postsCollectionRef = collection(db, 'posts')

    useEffect(() => {
        async function getPosts() {
            const data = await getDocs(postsCollectionRef)
            const list = data.docs.map(doc => ({ ...doc.data(), id: doc.id }))
            setPostLists(list)
        }

        getPosts()
    }, [])

    return (
        <div className='homePage'>
            {postLists.map(post => (
                <div className='post' key={post.id}>
                    <div className='postHeader'>
                        <div className='title'>
                            <h1>{post.title}</h1>
                        </div>
                        <div className='deletePost'>
                            {isAuth &&
                                post.author.id === auth.currentUser?.uid && (
                                    <button onClick={_ => deletePost(post.id)}>
                                        🗑
                                    </button>
                                )}
                        </div>
                    </div>
                    <div className='postTextContainer'>{post.postText}</div>
                    <h3>@{post.author.name}</h3>
                </div>
            ))}
        </div>
    )

    async function deletePost(id: string) {
        const postDoc = doc(db, id)
        await deleteDoc(postDoc)
    }
}

export default Home
