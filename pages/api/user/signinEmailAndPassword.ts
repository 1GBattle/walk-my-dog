import { signInWithEmailAndPassword } from 'firebase/auth'
import { NextApiRequest, NextApiResponse } from 'next'
import { auth } from '../../../firebase/firebase'

const signinEmailAndPassword = async (req: NextApiRequest, res: NextApiResponse) => {
	const { email, password } = req.body

	if (req.method === 'POST') {
		if (email && password) {
			try {
				const user = await signInWithEmailAndPassword(auth, email, password).then(
					(userCredential) => userCredential.user
				)

				res.status(200).json({
					user: { uid: user.uid, email: user.email, displayName: user.displayName }
				})
			} catch (error: any) {
				res.status(400).json({ err: error })
			}
		}
	} else {
		res.status(400).json({ message: 'Method not allowed' })
	}
}

export default signinEmailAndPassword
