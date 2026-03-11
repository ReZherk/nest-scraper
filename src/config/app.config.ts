export default () => ({
  port: parseInt(process.env.PORT ?? '3000', 10),
  swaggerPath: process.env.SWAGGER_PATH ?? 'api',
  appName: process.env.APP_NAME ?? 'NestJS API',
});
