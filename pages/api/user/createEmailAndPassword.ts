import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebase/firebase'
import { NextApiRequest, NextApiResponse } from 'next'

const CreateEmailAndPassword = async (req: NextApiRequest, res: NextApiResponse) => {
	const { email, password } = req.body

	if (req.method === 'POST') {
		if (email && password) {
			try {
				const user = await createUserWithEmailAndPassword(auth, email, password)
				console.log(user)
			} catch (error) {
				console.log(error)
			}
		} else {
			res.status(400).json({ message: 'Missing email or password' })
		}
	} else {
		res.status(400).json({ message: 'Method not allowed' })
	}
}

export default CreateEmailAndPassword
