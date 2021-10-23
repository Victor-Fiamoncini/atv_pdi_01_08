import { promises } from 'fs'

import FileReader from '@app/contracts/FileReader'

class PromisesFileReader implements FileReader {
	private readonly parser: string = 'breakLine'

	async execute({ encoding, path, name }: FileReader.Params) {
		const file = await promises.readFile(`${path}/${name}`, { encoding })

		let headerChunks = ''
		let contentChunks = ''

		if (this.parser === 'breakLine') {
			String(file)
				.split('\n')
				.forEach(line => {
					if (Number.isInteger(Number(line))) {
						contentChunks += `${line}\n`
					} else {
						headerChunks += `${line}\n`
					}
				})
		}

		if (this.parser === 'space') {
			String(file)
				.split(' ')
				.forEach(line => {
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
