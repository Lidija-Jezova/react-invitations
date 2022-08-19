import React from 'react'
import { UsersContext } from '../../context'
import Skeleton from '../UI/Button/Skeleton';

import styles from './User.module.scss'
import { HiPlus } from 'react-icons/hi';
import { HiMinus } from 'react-icons/hi';
import { HiOutlineMail } from 'react-icons/hi';

function User({ id, name, email, isInvited }) {
	const {
		isLoading,
		onClickInvite
	} = React.useContext(UsersContext)

	return (
		<>
			{isLoading
				?
				<Skeleton />
				:
				<div className={styles.user}>
					<div className={styles.avatar}>
						<img src={`../img/avatars/avatar-${id}.jpg`} alt="Avatar" />
					</div>
					<div className={styles.info}>
						<div className={styles.name}>{name}</div>
						<div className={styles.email}>
							<a href="mailto:mock@mock.com">
								<span><HiOutlineMail /></span>{email}
							</a>
						</div>
					</div>
					<button
						className={styles.plus}
						onClick={() => onClickInvite(id)}
					>
						{isInvited
							?
							<HiMinus />
							:
							<HiPlus />
						}

					</button>
				</div>
			}
		</>
	)
}

export default User