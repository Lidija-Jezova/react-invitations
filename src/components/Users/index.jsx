import React from 'react'
import User from '../User'
import { UsersContext } from '../../context'

import styles from './Users.module.scss'

function Users() {
	const {
		searchedUsers,
		isLoading,
		invites
	} = React.useContext(UsersContext)

	return (
		<div className={styles.users}>
			{isLoading ? [...Array(10)].map((item, index) => <User key={index} />)
				:
				searchedUsers.map(user =>
					<User
						key={user.id}
						{...user}
						isInvited={invites.includes(user.id)}
					/>
				)
			}
		</div>
	)
}

export default Users