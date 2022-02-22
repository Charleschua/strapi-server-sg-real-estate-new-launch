module.exports = ({ env }) => ({

  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('charlescloud'),
        api_key: env('737972524829861'),
        api_secret: env('oYdcW5wu4LEjsRH6z3C-ucNZ6-c'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
 
});
