/** @type {import('next').NextConfig} */

const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const deps = require('./package.json');

const configuration = () =>
	new NextFederationPlugin({
		name: 'account',
		filename: 'static/chunks/remoteEntry.js',
		extraOptions: {
			exposePages: true,
			automaticAsyncBoundary: true,
		},
	});

const nextConfig = {
	reactStrictMode: true,
	webpack: (config, options) => {
		// const { isServer } = options;
		config.plugins.push(configuration());
		return config;
	},
};

module.exports = nextConfig;
