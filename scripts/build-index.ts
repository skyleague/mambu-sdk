import camelcase from 'camelcase'

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
;(() => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url))
    const directories = fs.readdirSync(`${__dirname}/../src`)
    const globalExports: string[] = [
        `export * from './pagination.js'`,
        `export * from './streaming.js'`,
        `export * as streaming from './base-streaming.type.js'`,
    ]
    for (const dir of directories) {
        if (fs.lstatSync(`${__dirname}/../src/${dir}`).isDirectory()) {
            const files = fs.readdirSync(`${__dirname}/../src/${dir}`)

            const exports: string[] = []
            for (const file of files) {
                if (file.endsWith('.type.ts')) {
                    exports.push(`export * as ${camelcase(dir)} from './${file.replace('.ts', '.js')}'`)
                } else if (file.endsWith('.client.ts')) {
                    const contents = fs.readFileSync(`${__dirname}/../src/${dir}/${file}`, 'utf-8')
                    const className = contents.match(/export class (.+) {/)?.[1]
                    exports.push(`export { ${className} } from './${file.replace('.ts', '.js')}'`)
                }
            }

            if (exports.length > 0) {
                fs.writeFileSync(`${__dirname}/../src/${dir}/index.ts`, [...exports, ''].join('\n'))
                globalExports.push(`export * from './${dir}/index.js'`)
            }
        }
        if (globalExports.length > 0) {
            fs.writeFileSync(`${__dirname}/../src/index.ts`, [...globalExports, ''].join('\n'))
        }
    }
})()
