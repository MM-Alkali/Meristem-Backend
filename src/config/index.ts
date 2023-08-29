import * as dotenv from 'dotenv';

dotenv.config();

export const jwtsecret = String(process.env.JWT_SECRET);

export const connectionstring = String(process.env.MONGODB_URI);

export const defaultpassword = String(process.env.DEFAULT_PASSWORD);

export const verificationLink = String(process.env.ACTIVATION_LINK);

export const superadminpassword = String(process.env.SUPER_ADMIN_PASSWORD);

export const superadminemail = String(process.env.SUPER_ADMIN);

export const hostname = String(process.env.SMTP_HOSTNAME);

export const username = String(process.env.SMTP_USERNAME);

export const password = String(process.env.SMTP_PASSWORD);

export const port = Number(process.env.SMTP_PORT);
