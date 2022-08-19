import React from 'react';

const useSearch = (users, query) => {
	const searchedUsers = React.useMemo(() => {
		return users.filter(user =>
			user.name.toLowerCase().includes(query.toLowerCase()) ||
			user.email.toLowerCase().includes(query.toLowerCase())
		)
	}, [users, query])

	return searchedUsers
}

export { useSearch }