import { test } from 'node:test'
import assert from 'node:assert/strict'
import { createRequire } from 'node:module'

// Resolve the package by its own name so the published `exports` map (both
// conditions) is exercised, not the files on disk. Browserslist loads shared
// configs with require(), so a broken `require` condition breaks every
// consumer's `extends @ivuorinen/browserslist-config`.
const require = createRequire(import.meta.url)
const PKG = '@ivuorinen/browserslist-config'

test('require() resolves the query list', () => {
  const queries = require(PKG)
  assert.ok(Array.isArray(queries) && queries.length > 0)
})

test('import() resolves the same query list', async () => {
  const queries = (await import(PKG)).default
  assert.deepStrictEqual(queries, require(PKG))
})

test('the queries resolve to real browsers', () => {
  const browserslist = require('browserslist')
  assert.ok(browserslist(require(PKG)).length > 0)
})
