import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserModel } from '../models/userModel'

const userSlice = createSlice({
	name: 'user',
	initialState: {
		user: null as UserModel | null
	},
	reducers: {
		createUser: (state, action: PayloadAction<UserModel>) => {
			state.user = action.payload
		},
		logInUser: (state, action: PayloadAction<UserModel>) => {
			state.user = action.payload
		},
		logOutUser: (state, action) => {
			state.user = {} as UserModel
		}
	}
})

export default userSlice.reducer
export const { createUser, logInUser, logOutUser } = userSlice.actions
