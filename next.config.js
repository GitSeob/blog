require('dotenv').config();

module.exports = {
	webpack: (config) => {
		const prod = process.env.NODE_ENV === 'production';
		config.node = {
			fs: 'empty',
		};
		return { ...config, mode: prod ? 'production' : 'development' };
	},
	env: {
		SERVER_URL: process.env.NODE_ENV === 'production' ? process.env.PROD_SERVER_URL : process.env.DEV_SERVER_URL,
		DISQUS_URL: process.env.PROD_DISQUS_URL,
	},
	async headers() {
		return [
			{
				// matching all API routes
				source: '/api/:path*',
				headers: [
					{ key: 'Access-Control-Allow-Credentials', value: 'true' },
					{ key: 'Access-Control-Allow-Origin', value: '*' },
					{ key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
					{
						key: 'Access-Control-Allow-Headers',
						value:
							'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
					},
				],
			},
		];
	},
};
