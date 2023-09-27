import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAccount: {
    id:1,
    username:'edaceyy',
    fullName:'Eda Ceylan',
    avatar:'https://pbs.twimg.com/profile_images/1686123690403016704/mmGIYfzi_400x400.jpg'
  },
  accounts: [
	{
		id:1,
		username:'edaceyy',
		fullName:'Eda Ceylan',
		avatar:'https://pbs.twimg.com/profile_images/1686123690403016704/mmGIYfzi_400x400.jpg'
	},
	{
		id:2,
		username:'edaceylan',
		fullName:'Eda',
		avatar:'https://png.pngtree.com/png-clipart/20210310/original/pngtree-little-girl-avatar-png-image_5921072.jpg'
	}
  ],
};

const auth = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		// state manipule etme metodlari
		_addAccount: (state, action) => {
			state.accounts.push(action.payload)
		},
		_removeAccount: (state, action) => {
			state.accounts = state.accounts.filter(account => account.id !== action.payload)
			if (state.currentAccount && action.payload === state.currentAccount.id) {
				this._setCurrentAccount(false)
			}
		},
		_setCurrentAccount: (state, action) => {
			state.currentAccount = action.payload
		}
	}
})

export const { _addAccount, _setCurrentAccount, _removeAccount } = auth.actions
export default auth.reducer