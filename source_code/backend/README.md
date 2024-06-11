# Notes

- Environment variables can be accessed using `process.env.VARIABLE_NAME`.
- Jest has some deprecated dependencies but should not effect the development environment.
- An additional secret is required for auth0. Therefore add this to the `.env` file. A random one can be generated using `openssl rand -hex 32`, OpenSSL comes with Git Bash so prob easiest way to generate on Windows and can be done straight from command line in Linux.

## Considerations

- [Use Cloudinary as frontend node package?](https://cloudinary.com/documentation/client_side_uploading)
- Security packages such as [CORS](https://www.npmjs.com/package/cors), [XSS](https://www.npmjs.com/package/xss), [Helmet](https://www.npmjs.com/package/helmet), [express-rate-limit](https://www.npmjs.com/package/express-rate-limit), [bcryptjs](https://www.npmjs.com/package/bcryptjs)
