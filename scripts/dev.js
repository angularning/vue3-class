const {resolve, relative} = require('path');

const { build } = require('esbuild')
// 获取命令行参数
// _: [
    // 'reactivity'
//   ],
//   f: 'global'
const args = require('minimist')(process.argv.slice(2))

// 获取当前目录
const target = args._[0]
// 获取当前打包方式
const format = args.f || 'global'

// 获取打包文件
const pkg = require(resolve(__dirname, `../packages/${target}/package.json`))

const outputFormat = format.startsWith('global')
  ? 'iife'
  : format === 'cjs'
  ? 'cjs'
  : 'esm'

const outfile = resolve(__dirname, `../packages/${target}/dist/${target}.${format}.js`)

const relativeOutfile = relative(process.cwd(), outfile)

build({
    entryPoints: [resolve(__dirname, `../packages/${target}/src/index.ts`)],
    outfile,
    bundle: true,
    sourcemap: true,
    format: outputFormat,
    globalName: pkg.buildOptions?.name,
    platform: format === 'cjs' ? 'node' : 'browser',
    watch: {
      onRebuild(error) {
        if (!error) console.log(`rebuilt: ${relativeOutfile}`)
      }
    }
  }).then(() => {
    console.log(`watching: ${relativeOutfile}`)
  })