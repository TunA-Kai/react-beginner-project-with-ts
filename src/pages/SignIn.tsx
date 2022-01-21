import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase.config'

interface SignInProps {}

function SignIn({}: SignInProps) {
    const [signUpEmail, setSignUpEmail] = useState<string>('')
    const [signUpPassword, setSignUpPassword] = useState<string>('')
    const [signInEmail, setSignInEmail] = useState<string>('')
    const [signInPassword, setSignInPassword] = useState<string>('')
    const navigate = useNavigate()

    async function signup(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                signUpEmail,
                signUpPassword,
            )
            console.log(userCredential)
            navigate(-1)
        } catch (error: any) {
            const errorCode = error.code
            const errorMessage = error.message
            console.log(errorCode, errorMessage)
        }
    }

    async function signin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                signInEmail,
                signInPassword,
            )
            console.log(userCredential)
            navigate(-1)
        } catch (error: any) {
            const errorCode = error.code
            const errorMessage = error.message
            console.log(errorCode, errorMessage)
        }
    }

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={signup}>
                <label>
                    email:{' '}
                    <input
                        type='email'
                        name='email'
                        value={signUpEmail}
                        onChange={e => setSignUpEmail(e.target.value)}
                    />
                </label>
                <label>
                    password:{' '}
                    <input
                        type='password'
                        name='password'
                        value={signUpPassword}
                        onChange={e => setSignUpPassword(e.target.value)}
                    />
                </label>
                <input type='submit' value='Sign up' />
            </form>

            <h2>Sign In</h2>
            <form onSubmit={signin}>
                <label>
                    email:{' '}
                    <input
                        type='email'
                        name='email'
                        value={signInEmail}
                        onChange={e => setSignInEmail(e.target.value)}
                    />
                </label>
                <label>
                    password:{' '}
                    <input
                        type='password'
                        name='password'
                        value={signInPassword}
                        onChange={e => setSignInPassword(e.target.value)}
                    />
                </label>
                <input type='submit' value='Sign in' />
            </form>
        </div>
    )
}

export default SignIn
