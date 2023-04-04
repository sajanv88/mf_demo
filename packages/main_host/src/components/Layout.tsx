import { ReactNode, useEffect, useState } from 'react';

interface LayoutProps {
	children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
	const [user, setUser] = useState<Record<string, any> | null>();
	const [totalJokes, setTotalJokes] = useState<number>(0);
	useEffect(() => {
		async function init() {
			if (window) {
				window.addEventListener('account', (e: Event) => {
					const target = e as CustomEvent;
					setUser(target.detail.user);
					console.log(target.detail, 'event');
				});

				window.addEventListener('TOTAL_JOKES', (e: Event) => {
					const target = e as CustomEvent;
					setTotalJokes(target.detail.length);
					console.log(target.detail, 'event');
				});
			}
		}
		init();
	}, []);
	return (
		<main>
			<header
				style={{
					display: 'flex',
					alignItems: 'center',
					padding: '5rem',
				}}>
				<nav style={{ flex: 1 }}>Username: {user?.name}</nav>
				<span>Total Jokes {totalJokes}</span>
			</header>

			{children}
		</main>
	);
}
