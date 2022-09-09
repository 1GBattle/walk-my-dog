import { NextPage } from 'next'
import { useRouter } from 'next/router'
import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar'
import { useAppState } from '../redux/hooks'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
	const user = useAppState((state) => state.user)
	const router = useRouter()

	if (user) {
		return (
			<div className={styles.container}>
				<NavBar />

				<div className={styles.contentContainer}>
					<h1>Home </h1>

					<SearchBar />
					<h1>another home</h1>
				</div>
			</div>
		)
	} else {
		router.push('/')
		return <h1>Redirecting...</h1>
	}
}

export default Home
