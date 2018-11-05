
declare var process;

process = process || { env: {} }

// web与开发环境

// process.env.NODE_ENV = 'devlopment'

// app 环境
process.env.NODE_ENV = 'production'

export const ENV = process.env.NODE_ENV