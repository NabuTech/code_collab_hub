import { auth } from "express-openid-connect";

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.secret,
  baseURL: "http://localhost:3000",
  clientID: "ElVAQBebQ3oxPhY2v7y6XHMVUBcvKAjJ",
  issuerBaseURL: "https://dev-h1cesxfotv4gddtn.us.auth0.com",
};

export const authMiddleware = auth(config);
