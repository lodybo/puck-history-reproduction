declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    WIX_API_KEY: string;
    WIX_SITE_ID: string;
    WIX_ACCOUNT_ID: string;
  }
}
