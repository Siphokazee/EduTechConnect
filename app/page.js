'use client';

import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
	const [createAccountModalShown, setCreateAccountModalShown] = useState(false);
	const [educatorModalShown, setEducatorModalShown] = useState(false);
	const [learnerModalShown, setLearnerModalShown] = useState(false);

	const handleCreateAccount = () => {
		setCreateAccountModalShown(!createAccountModalShown);
	};

	const handleEducatorLogin = () => {
		setEducatorModalShown(!educatorModalShown);
	};

	const handleLearnerLogin = () => {
		setLearnerModalShown(!learnerModalShown);
	};

	return (
		<main className={styles.main}>
			<Image
				src='/logo.png'
				height={180}
				width={400}
				alt='techeduconnectlogo'
				className={styles.logo}
			/>
			<div
				className={styles.buttons_container}
				style={{
					display: `${
						createAccountModalShown || learnerModalShown || educatorModalShown
							? 'none'
							: 'flex'
					}`,
				}}
			>
				<div className={styles.left}>
					<h2>Create a new Account</h2>
					<button onClick={handleCreateAccount}>New Account</button>
				</div>
				<div className={styles.right}>
					<h2>Login As</h2>
					<button onClick={handleEducatorLogin}>Educator</button>
					<button onClick={handleLearnerLogin}>Learner</button>
				</div>
			</div>

			{/* Create Account Modal */}
			<div
				className={styles.modal_container}
				style={{ display: `${createAccountModalShown ? 'flex' : 'none'}` }}
			>
				<div className={styles.modal}>
					<h2>Create an Account</h2>
					<input type='text' placeholder='Name' />
					<input type='text' placeholder='email' />
					<input type='password' placeholder='password' />
					<button type='submit'> Register</button>
					<button className={styles.close_btn} onClick={handleCreateAccount}>
						X
					</button>
				</div>
			</div>

			{/* Login As Educator Modal */}
			<div
				className={styles.modal_container}
				style={{ display: `${educatorModalShown ? 'flex' : 'none'}` }}
			>
				<div className={styles.modal}>
					<h2>Educator Login</h2>
					<input type='text' placeholder='email' />
					<input type='password' placeholder='password' />
					<span>Forgot Password?</span>
					<button type='submit'> Login</button>
					<button className={styles.close_btn} onClick={handleEducatorLogin}>
						X
					</button>
				</div>
			</div>

			{/* Login As Learner Modal */}

			<div
				className={styles.modal_container}
				style={{ display: `${learnerModalShown ? 'flex' : 'none'}` }}
			>
				<div className={styles.modal}>
					<h2>Learner Login</h2>
					<input type='text' placeholder='email' />
					<input type='password' placeholder='password' />
					<span>Forgot Password?</span>
					<button type='submit'> Login</button>
					<button className={styles.close_btn} onClick={handleLearnerLogin}>
						X
					</button>
				</div>
			</div>
		</main>
	);
}
