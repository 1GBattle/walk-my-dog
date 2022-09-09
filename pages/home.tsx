import { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import ListingPagination from '../components/ListingPagination'
import Menu from '../components/SideBar'
import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar'
import { useAppState } from '../redux/hooks'
import styles from '../styles/Home.module.css'
import SideBar from '../components/SideBar'

const Home: NextPage = () => {
	const user = useAppState((state) => state.user)
	const router = useRouter()
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

	if (user) {
		return (
			<div className={styles.container}>
				<div className={styles.navContainer}>
					<NavBar />

					<button
						className={`${styles.menuButton}`}
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						<Image src='/menu-icon.png' alt='menu icon' width={30} height={30} />
					</button>
				</div>

				{<SideBar isOpen={isMenuOpen} />}
				<div className={styles.contentContainer}>
					<SearchBar />

					<div className={styles.listingsContainer}>
						<ListingPagination listingTitle='Listing seeking dog walker' />
					</div>
				</div>
			</div>
		)
	} else {
		router.push('/')
		return <h1>Redirecting...</h1>
	}
}

export default Home
