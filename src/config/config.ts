import * as dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 3000;
export const POSTGRES_HOST = process.env.POSTGRES_HOST || '127.0.0.1';
export const POSTGRES_PORT = process.env.POSTGRES_PORT || '5432';
export const POSTGRES_USER = process.env.POSTGRES_USER || 'postgres';
export const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD || 'password';
export const POSTGRES_DB = process.env.POSTGRES_DB || 'novotorica';
