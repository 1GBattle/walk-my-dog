import React from 'react'
import Image from 'next/image'
import styles from '../styles/NavBar.module.css'
import Link from 'next/link'

const NavBar = () => {
	return (
		<div className={styles.navContainer}>
			<nav className={styles.nav}>
				<button className={`${styles.navBtn} btn`}>
					<Link href={'/'}>
						<Image
							src='/walking-dog-logo.png'
							alt='walking dog logo'
							width={48}
							height={48}
						/>
					</Link>
				</button>
			</nav>
		</div>
	)
}

export default NavBar
