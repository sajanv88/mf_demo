import { ReactNode, useEffect, useState } from 'react';

interface LayoutProps {
	children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
	useEffect(() => {
		if (window) {
			window.dispatchEvent(
				new CustomEvent('account', {
					detail: {
						user: {
							name: 'test',
							email: 'test@gmail.com',
							isAuthenticated: true,
						},
					},
				})
			);
		}
	}, []);

	return <main>{children}</main>;
}
