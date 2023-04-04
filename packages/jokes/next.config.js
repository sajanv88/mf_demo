/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const configuration = (isServer) =>
	new NextFederationPlugin({
		name: 'jokes',
		filename: 'static/chunks/remoteEntry.js',
		exposes: {
			'./Jokes': './src/components/ListJokes.tsx',
		},
	});
const nextConfig = {
	reactStrictMode: true,
	webpack: (config, options) => {
		const { isServer } = options;
		config.plugins.push(configuration(isServer));
		return config;
	},
};

module.exports = nextConfig;
