import React from 'react'
import Card from '../Card'
import Users from '../Users'
import Button from '../UI/Button'

import styles from './InvitationalPanel.module.scss'
import { BiSearch } from 'react-icons/bi'

function InvitationalPanel({ setSearchQuery, sendInvitations, invites }) {
	return (
		<Card>
			<form
				className={styles.form}
				action="#"
			>
				<button className={styles.searchBtn}><BiSearch /></button>
				<input
					className={styles.input}
					type="text"
					placeholder="Search..."
					onChange={e => setSearchQuery(e.target.value)}
				/>
			</form>
			<Users />
			{invites.length>0 && <Button onClick={sendInvitations}>Send invitation</Button>}
		</Card>
	)
}

export default InvitationalPanel