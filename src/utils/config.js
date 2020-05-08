//const env = 'prod'
const env = 'dev'

const params = {
  paths: {
    login: '/auth/login'
  },

}

const prod = {
  ...params,
  apiUrl: 'https://lurog.live/api/v1',
  environment: 'prod',
}

const dev = {
  ...params,
  apiUrl: 'https://lurog.live/api/v1',
  environment: 'dev',
}

const config = {
  prod,
  dev
}

export const CONFIG = config[env]


