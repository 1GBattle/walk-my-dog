import Link from 'next/link'
import React from 'react'
import { useAppState } from '../redux/hooks'
import styles from '../styles/SideBar.module.css'
import { slide as Menu } from 'react-burger-menu'

interface Props {
	isOpen: boolean
}

const SideBar: React.FC<Props> = ({ isOpen }) => {
	const user = useAppState((state) => state.user).user

	return (
		// <div className={`${styles.sidebarContainer}`}>
		<Menu isOpen={isOpen}>
			<ul className={`${styles.sidebarList}`}>
				<Link href='/createlisting' className={`${styles.sidebarItem}`}>
					Create Listing
				</Link>
				<Link
					href={`/${user?.displayName}/listings`}
					className={`${styles.sidebarItem}`}
				>
					My Listings
				</Link>
				<Link
					href={`/${user?.displayName}/account`}
					className={`${styles.sidebarItem}`}
				>
					My Profile
				</Link>
				<Link
					href={`/${user?.displayName}/payments}`}
					className={`${styles.sidebarItem}`}
				>
					My Payments
				</Link>
			</ul>
		</Menu>
		// </div>
	)
}

export default SideBar
