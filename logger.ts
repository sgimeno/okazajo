export const logger = require('pino')({
    prettyPrint: process.env.NODE_ENV !== 'production'
})