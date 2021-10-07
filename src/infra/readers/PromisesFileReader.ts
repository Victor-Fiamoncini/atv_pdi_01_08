import { promises } from 'fs'

import FileReader from '@app/contracts/FileReader'

class PromisesFileReader implements FileReader {
	private readonly parser: string = 'byte'

	async execute({ encoding, path, name }: FileReader.Params) {
		const file = await promises.readFile(`${path}/${name}`, { encoding })

		const lines = file.toString().split('\n')

		let headerChunks = ''
		let contentChunks = ''

		if (this.parser === 'byte') {
			lines.forEach(line => {
				if (Number.isInteger(Number(line))) {
					contentChunks += `${line}\n`
				} else {
					headerChunks += `${line}\n`
				}
			})
		}

		return {
			header: headerChunks,
			content: contentChunks,
		}
	}
}

export default PromisesFileReader
