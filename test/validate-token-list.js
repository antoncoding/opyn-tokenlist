const Ajv = require('ajv')
const addFormats = require('ajv-formats')
const {schema} = require('@uniswap/token-lists')
const list = require('../opyn-squeeth-tokenlist.json')

const ajv = new Ajv({allErrors: true, verbose: true})
addFormats(ajv)
const validate = ajv.compile(schema)

function main() {
  console.log('validating token list...')
  const valid = validate(list)
  if (valid) {
    console.log('valid')
  } else {
    console.error(validate.errors)
    throw new Error('invalid list')
  }
}

main()

module.exports = main