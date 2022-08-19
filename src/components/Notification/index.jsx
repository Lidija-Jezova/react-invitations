import React from 'react'
import Card from '../Card'
import Button from '../UI/Button'

import styles from './Notification.module.scss'
import { HiBadgeCheck } from 'react-icons/hi'

function Notification({ goBack }) {
	return (
		<Card>
			<HiBadgeCheck className={styles.check} />
			<h1 className={styles.title}>Success!</h1>
			<div className={styles.text}>
				Invitations had been sent
				Invitation has been sent
			</div>
			<Button onClick={goBack}>Back</Button>
		</Card >
	)
}

export default Notification