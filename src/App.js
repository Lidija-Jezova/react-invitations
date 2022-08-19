import React from 'react';
import axios from 'axios';

import InvitationalPanel from './components/InvitationalPanel';
import Notification from './components/Notification';
import { UsersContext } from './context'
import { useSearch } from './hooks/useSearch';

import './scss/App.scss'

function App() {
	const [users, setUsers] = React.useState([])
	const [invites, setInvites] = React.useState([])
	const [isLoading, setIsLoading] = React.useState(false)
	const [isSent, setIsSent] = React.useState(false)
	const [searchQuery, setSearchQuery] = React.useState('')
	const searchedUsers = useSearch(users, searchQuery)

	const getUsers = async () => {
		try {
			setIsLoading(true)
			const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
			setUsers(prev => [...prev, ...data])
			setIsLoading(false)
		} catch (error) {
			console.error(error)
		}
	}

	React.useEffect(() => {
		getUsers()
	}, [])

	const onClickInvite = (id) => {
		if (invites.includes(id)) {
			setInvites(prev => prev.filter(_id => _id !== id))
		} else {
			setInvites(prev => [...prev, id])
		}
	}

	const sendInvitations = () => {
		setIsSent(true)
	}

	const goBack = () => {
		setIsSent(false)
	}

	return (
		<div className='App'>
			{isSent
				?
				<Notification
					goBack={goBack}
				/>
				:
				<UsersContext.Provider value={{
					searchedUsers,
					isLoading,
					invites,
					onClickInvite
				}} >
					<InvitationalPanel
						setSearchQuery={setSearchQuery}
						sendInvitations={sendInvitations}
						invites={invites}
					/>
				</UsersContext.Provider>
			}
		</div >
	)
}

export default App;
