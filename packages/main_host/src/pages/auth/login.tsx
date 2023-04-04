import Layout from '@/components/Layout';
import dynamic from 'next/dynamic';
const AccountPage = dynamic(() => import('account/pages/index'), {
	ssr: false,
});
const ListJokes = dynamic(() => import('jokes/Jokes'), {
	ssr: false,
});
export default function LoginPage() {
	return (
		<Layout>
			<section
				style={{
					display: 'flex',
					justifyContent: 'space-evenly',
					maxWidth: '110rem',
					margin: '0 auto',
				}}>
				<AccountPage />
				<ListJokes />
			</section>
		</Layout>
	);
}
