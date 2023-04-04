/** @type {import('next').NextConfig} */

const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const deps = require('./package.json');

const nextConfig = {
	reactStrictMode: true,
	webpack: (config, options) => {
		const { isServer } = options;
		const c = new NextFederationPlugin({
			name: 'main_host',
			filename: 'static/chunks/remoteEntry.js',
			remotes: {
				account: `account@http://localhost:3000/_next/static/${
					isServer ? 'ssr' : 'chunks'
				}/remoteEntry.js`,
				jokes: `jokes@http://localhost:3002/_next/static/${
					isServer ? 'ssr' : 'chunks'
				}/remoteEntry.js`,
			},
			extraOptions: {
				automaticAsyncBoundary: true,
				automaticPageStitching: true,
			},
		});
		config.plugins.push(c);
		return config;
	},
};

module.exports = nextConfig;
