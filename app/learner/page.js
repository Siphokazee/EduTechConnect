import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';

function Learner() {
	return (
		<main className={styles.main}>
			<div className={styles.left}>
				<Image
					src='/Learner-Bg.png'
					height={150}
					width={350}
					alt='techeduconnectlogo'
					className={styles.logo}
				/>
				<Image
					src='/Educator-Bg.png'
					height={270}
					width={300}
					alt='techeduconnectlogo'
					className={styles.logo}
				/>
				<button>We Learn More</button>
			</div>
			<div className={styles.right}>
				<button>Grade 5</button>
				<button>Grade 6</button>
				<button>Grade 7</button>
			</div>
		</main>
	);
}

export default Learner;
