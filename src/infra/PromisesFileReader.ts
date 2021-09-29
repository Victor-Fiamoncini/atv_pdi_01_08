import { promises } from 'fs'

import FileReader from '@app/contracts/FileReader'

class PromisesFileReader implements FileReader {
	async execute({ path, name, encoding }: FileReader.Params) {
		const bufferEncoding = encoding as BufferEncoding

		const file = await promises.readFile(`${path}/${name}`, {
			encoding: bufferEncoding,
		})

		const lines = file.toString().split('\n')

		let headerChunks = ''
		let contentChunks = ''

		lines.forEach(line => {
			if (Number.isInteger(Number(line))) {
				contentChunks += `${line}\n`
			} else {
				headerChunks += `${line}\n`
			}
		})

		return {
			header: headerChunks,
			content: contentChunks,
		}
	}
}

export default PromisesFileReader
