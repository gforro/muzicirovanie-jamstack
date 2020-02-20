// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Muzicirovanie',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Markdown',
        path: './markdowns/**/*.md',
      }
    },
    {
      use: 'gridsome-source-firestore',
      options: {
        credentials: {
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
        debug: true, // Default false, should be true to enable live data updates
        ignoreImages: true, // Default false
        imageDirectory: 'fg_images', // Default /fg_images
        collections: [
          {
            ref: (db) => {
              return db.collection('courses')
            },
            slug: 'type',
          },
        ]
      }
    }
  ],
  transformers : {
    remark : {
      autolinkHeadings: false,
      plugins : [
        ['@noxify/gridsome-remark-classes', {
          'heading[depth=1]': 'title is-1',
          'heading[depth=2]': 'subtitle',
          'paragraph': 'text-normal font-serif'
        }]
      ]
    }
  }
}
