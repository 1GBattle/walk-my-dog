import Image from 'next/image'
import React from 'react'
import styles from '../styles/SearchBar.module.css'

const SearchBar = () => {
	return (
		<div className={styles.searchContainer}>
			<input
				className={`inputField ${styles.searchInput}`}
				type='text'
				placeholder='Search listings...'
			/>
			<Image
				className={styles.searchIcon}
				src='/search-icon.png'
				width={32}
				height={32}
				alt='magnifying glass search icon'
			/>
		</div>
	)
}

export default SearchBar
