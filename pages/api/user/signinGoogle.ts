import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { NextApiRequest, NextApiResponse } from 'next'
import { auth, googleProvider } from '../../../firebase/firebase'

const signinGoogle = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'POST') {
		const result = await signInWithPopup(auth, googleProvider).then(
			(result) => result.user
		)

		res.status(200).json({ result })
	} else {
		res.status(400).json({ err: 'Invalid request method' })
	}
}

export default signinGoogle
