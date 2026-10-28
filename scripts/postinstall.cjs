'use strict'

/* eslint no-console: "off" -- CLI app that gives users feedback */

const { writeStarterConfig } = require('@ivuorinen/config-checker')

// This runs on every consumer install, and a non-zero exit fails that whole
// install. writeStarterConfig never throws: it falls back to the working
// directory when INIT_CWD is unset, creates the file with 'wx' so a config a
// concurrent install wrote is never overwritten, and returns a failed write for
// this script to report.
const fileConfigObject = 'extends @ivuorinen/browserslist-config'
const result = writeStarterConfig('browserslist', '.browserslistrc', fileConfigObject)

if (result.status === 'found') {
  console.log('browserslist-config: Found existing browserslist config file, skipping creation.')
  console.log('browserslist-config: If you want to create a new config file, please remove the existing one.')
  console.log(`browserslist-config: Found config files at: ${result.found.join(', ')}`)
} else if (result.status === 'failed') {
  console.log(`browserslist-config: could not write ${result.filePath} (${result.error.code || result.error.message}).`)
  console.log(`browserslist-config: create it manually containing: ${fileConfigObject}`)
}
