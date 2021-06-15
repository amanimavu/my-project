module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        //host: env('DATABASE_HOST', '127.0.0.1'),
        uri: env('DATABASE_URI', 'mongodb+srv://butika:butika@butikabackend.ef4cz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
        srv: env.bool('DATABASE_SRV', true),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'my-project'),
        //username: env('DATABASE_USERNAME', null),
        //password: env('DATABASE_PASSWORD', null),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});
