import axios from 'axios'
import * as qs from 'qs'
import { logger } from '../../logger'

let client, secret

export function configure ({ baseURL, token, timeout = 1000, headers = { 'content-type': 'application/json' } }) {
    secret = token
    client = axios.create({ 
        baseURL, 
        timeout, 
        headers 
    })
}

type HttpMethod = 'get' | 'post' | 'put' | 'delete'

async function operation (method: HttpMethod, path: string, data?: any) {
    const url: string = [ path, '?', qs.stringify({ token: secret }) ].join('')
    await client({ method, data, url })
}

const create = (path: string, data: any) => operation.call(null, 'post', path, data)
const read = (path: string) => operation.call(null, 'get', path)
const update = (path: string, data: any) => operation.call(null, 'put', path, data)
const remove = (path: string) => operation.call(null, 'delete', path)

export {
    create,
    read,
    update,
    remove
}