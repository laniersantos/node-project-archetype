export interface AppConfig {
  server: {
    host: string;
    port: number;
  };
  sqs: {
    host: string;
    port: number;
    path: string;
  };
}

export const APP_CONFIG = {
  server: {
    host: process.env.SERVER_HOST || '0.0.0.0',
    port: process.env.SERVER_PORT || 80,
  },
  sqs: {
    host: process.env.SQS_HOST || 'localhost',
    port: process.env.SQS_PORT || 3000,
    path: process.env.SQS_PATH || '/',
  },
} as AppConfig;
