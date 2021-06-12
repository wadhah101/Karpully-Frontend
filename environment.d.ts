declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_URL: string;
      NEXT_PUBLIC_API_REST_URL: string;
      NODE_ENV: 'development' | 'production';
    }
  }
}

export {};
