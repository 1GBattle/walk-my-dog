import React from 'react'
import styles from '../styles/ListingPagination.module.css'

interface Props {
	listingTitle: string
}
const ListingPagination: React.FC<Props> = ({ listingTitle }) => {
	return (
		<div className={styles.container}>
			<h1 className={`${styles.listingTitle}`}>{listingTitle}</h1>
		</div>
	)
}

export default ListingPagination
