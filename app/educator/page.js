import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';

function Educator() {
	return (
		<main className={styles.main}>
			<div className={styles.left}>
				<Image
					src='/Educator-Bg.png'
					height={470}
					width={500}
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

export default Educator;
