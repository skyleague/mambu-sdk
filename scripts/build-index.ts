import camelcase from 'camelcase'
import fs from 'fs'

(() => {
    const directories = fs.readdirSync(`${__dirname}/../src`)
    const globalExports: string[] = [`export * from './streaming'`,`export * as streaming from './base-streaming.type'`]
    for (const dir of directories) {
        if (fs.lstatSync(`${__dirname}/../src/${dir}`).isDirectory()) {
            const files = fs.readdirSync(`${__dirname}/../src/${dir}`)

            const exports: string[] = []
            for (const file of files) {
                if (file.endsWith('.type.ts')) {
                    exports.push(`export * as ${camelcase(dir)} from './${file.replace('.ts', '')}'`)
                } else if (file.endsWith('.client.ts')) {
                    exports.push(`export * from './${file.replace('.ts', '')}'`)
                }
            }

            if (exports.length > 0) {
                fs.writeFileSync(`${__dirname}/../src/${dir}/index.ts`, [...exports,''].join('\n'))
                globalExports.push(`export * from './${dir}'`)
            }
        }
        if (globalExports.length > 0) {
            fs.writeFileSync(`${__dirname}/../src/index.ts`, [...globalExports,''].join('\n'))
        }
    }
})()