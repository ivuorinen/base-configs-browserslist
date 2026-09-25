'use strict'

/* eslint no-console: "off", n/no-process-exit: "off" -- CLI app that gives users feedback */

const fs = require('node:fs')
const path = require('node:path')
const process = require('node:process')
const checkConfig = require('@ivuorinen/config-checker')

// This runs on every consumer install, and a non-zero exit fails that whole
// install. The starter config is a convenience, so every step below degrades to
// a message instead of throwing.

// INIT_CWD is an npm/yarn convention, not a guarantee.
const cwd = process.env.INIT_CWD || process.cwd()
const foundConfig = checkConfig('browserslist', cwd)

if (foundConfig.length > 0) {
  console.log('browserslist-config: Found existing browserslist config file, skipping creation.')
  console.log('browserslist-config: If you want to create a new config file, please remove the existing one.')
  console.log(`browserslist-config: Found config files at: ${foundConfig.join(', ')}`)
  process.exit(0)
}

const filePath = path.join(cwd, '.browserslistrc')
const fileConfigObject = 'extends @ivuorinen/browserslist-config'

// 'wx' makes "does it exist?" and "write it" one atomic step, so a concurrent
// install cannot create the file in between and have it overwritten.
try {
  fs.writeFileSync(filePath, fileConfigObject, { flag: 'wx' })
} catch (error) {
  if (error.code !== 'EEXIST') {
    console.log(`browserslist-config: could not write ${filePath} (${error.code || error.message}).`)
    console.log(`browserslist-config: create it manually containing: ${fileConfigObject}`)
  }
}
