import React from 'react'
import ListingModel from '../models/listingModel'

interface Props {
	listing: ListingModel
}

const ListingCard: React.FC<Props> = ({ listing }) => {
	return (
		<div className='listingCard'>
			<h1>{listing.title}</h1>
		</div>
	)
}

export default ListingCard
