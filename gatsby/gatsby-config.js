require('dotenv').config({
	path: '.env',
});

module.exports = {
	siteMetadata: {
		title: 'Muzicírovanie',
		author: 'Gabriel Forró',
		imageUrl: 'https://i.imgur.com/Vz81GEl.png',
		description: 'A Project to bootstrap your next Gatsby + Bulma site.',
		keywords: `Web developer, Web, Developer, CSS, HTML, JS, Javascript, Gatsby, Bulma Developer, CSS3, HTML5, Seo, Starter`,
		twitter: 'https://twitter.com/amanhimself',
		github: `https://github.com/amandeepmittal`,
		medium: 'https://medium.com/@amanhimself',
		gatsby: 'https://www.gatsbyjs.org/',
		bulma: 'https://bulma.io/',
		siteUrl: `https://www.example.com`
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Makefolio',
				short_name: 'Makefolio',
				start_url: '/',
				background_color: '#2980b9',
				theme_color: '#2980b9',
				display: 'standalone',
				icon: 'src/images/gatsby-icon.png',
				orientation: 'portrait'
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `mdx`,
				path: `${__dirname}/src/mdx/`,
				ignore: ['**/course-types/*']
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `courseTypes`,
				path: `${__dirname}/src/mdx/course-types/`,
			},
		},
		'gatsby-plugin-mdx',
		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: 'UA-XXXXXXXX-X',
				// Setting this parameter is optional (requried for some countries such as Germany)
				anonymize: true
			}
		},
		'gatsby-plugin-sitemap',
		'gatsby-plugin-layout',
		{
			resolve: 'gatsby-firesource',
			options: {
				credential: {
					"type": process.env.FIREBASE_TYPE,
					"project_id": process.env.FIREBASE_PROJECT_ID,
					"private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
					"private_key": process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
					"client_email": process.env.FIREBASE_CLIENT_EMAIL,
					"client_id": process.env.FIREBASE_CLIENT_ID,
					"auth_uri": process.env.FIREBASE_AUTH_URI,
					"token_uri": process.env.FIREBASE_TOKEN_URI,
					"auth_provider_x509_cert_url": process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
					"client_x509_cert_url": process.env.FIREBASE_CLIENT_X509_CERT_URL
				},
				types: [
					{
						type: 'Course',
						collection: 'courses',
						map: doc => ({
							type: doc.type,
							capacity: doc.capacity,
							fromDate: doc.fromDate.toDate(),
							toDate: doc.toDate.toDate(),
							when: doc.when
						}),
					},
				],
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	]
};
