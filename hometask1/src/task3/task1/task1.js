import { removeEOL } from './utils'

process.stdin.on('data', chunk => {
  process.stdout.write(removeEOL(chunk).reverse())
  process.stdout.write('\n')
})
