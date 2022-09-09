import React, { FormEvent } from 'react'
import axios from 'axios'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { useAppDispatch } from '../redux/hooks'
import { logInUser } from '../redux/userSlice'
import { signInWithPopup } from 'firebase/auth'
import { auth, googleProvider } from '../firebase/firebase'

const Home: NextPage = () => {
	const [email, setEmail] = React.useState<string>('')
	const [password, setPassword] = React.useState<string>('')

	const router = useRouter()
	const dispatch = useAppDispatch()

	const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const user = await axios.post('/api/user/signinEmailAndPassword', {
			email,
			password
		})
		dispatch(logInUser(user.data))
		router.push('/home')
	}

	const handleGoogleSignin = async () => {
		const user = signInWithPopup(auth, googleProvider).then((result) => result.user)

		if (user) {
			dispatch(logInUser(user))
			router.push('/home')
		} else {
			router.push('/')
		}
	}

	return (
		<div>
			<NavBar />

			<div className={styles.titleContainer}>
				<h1 className={styles.title}>Welcome to Walk My Dog!</h1>
			</div>

			<form className={`form`} onSubmit={(e) => handleFormSubmit(e)}>
				<div className={`formGroup`}>
					<label className={`formLabel`} htmlFor='email'>
						Email
					</label>
					<input
						value={email}
						className={`inputField`}
						type='email'
						name='email'
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>

				<div className={`formGroup`}>
					<label className={`formLabel`} htmlFor='password'>
						Password
					</label>
					<input
						value={password}
						className={`inputField`}
						type='password'
						id='password'
						name='password'
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>

				<div className={`formGroup`}>
					<button className={`btn ${styles.loginBtn}`} type='submit'>
						Login
					</button>
				</div>

				<p className={`${styles.signUpLink}`}>
					<Link href={'/signup'}>Dont have an account? Signup today for free!</Link>
				</p>
			</form>

			<div className={styles.googleBtnContainer}>
				<button
					className={`btn ${styles.googleBtn}`}
					onClick={() => handleGoogleSignin()}
				>
					<Image
						className={`${styles.googleImg}`}
						src={'/signin_with_google.png'}
						width={287}
						height={64}
						alt='signin with google'
					/>
				</button>
			</div>
		</div>
	)
}

export default Home
