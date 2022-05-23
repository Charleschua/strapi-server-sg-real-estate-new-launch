module.exports = ({ env }) => ({
  proxy: true,
  url: env('https://whispering-atoll-93697/herokuapp.com'),
  app: {
    keys: env.array('APP_KEYS')
  },
});
