import { useEffect, useState } from 'react';
interface Response {
	error: boolean;
	category: string;
	type: string;
	setup: string;
	delivery: string;
	flags: Flags;
	joke: string;
	id: number;
	safe: boolean;
	lang: string;
}

interface Flags {
	nsfw: boolean;
	religious: boolean;
	political: boolean;
	racist: boolean;
	sexist: boolean;
	explicit: boolean;
}
export default function ListJokes() {
	const [count, setCount] = useState(0);

	const [data, setData] = useState<Response[]>([]);
	useEffect(() => {
		async function init() {
			const response = await fetch('https://v2.jokeapi.dev/joke/Any');
			const joke = await response.json();
			data.push(joke);
			setData([...data]);
			setTimeout(init, 5000);
		}
		init();
	}, []);

	useEffect(() => {
		window.dispatchEvent(new CustomEvent('TOTAL_JOKES', { detail: data }));
	}, [data]);
	return (
		<section className="jokes-container" style={{ maxWidth: '20rem' }}>
			<ul>
				{data.map((response) => (
					<li
						key={Math.random() * Date.now()}
						style={{ wordBreak: 'break-all' }}>
						{response.type === 'single' ? (
							response.joke
						) : (
							<>
								{response.setup} <br />
								{response.delivery}
							</>
						)}
					</li>
				))}
			</ul>
		</section>
	);
}
