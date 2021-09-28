import { createReadStream } from 'fs'

import FileReader from '@app/contracts/FileReader'

class StreamFileReader implements FileReader {
	async execute({ path, name, encoding }: FileReader.Params) {
		const bufferEncoding = encoding as BufferEncoding

		const readStream = createReadStream(`${path}/${name}`, {
			encoding: bufferEncoding,
		})

		let chunks = ''

		return new Promise<string>((resolve, reject) => {
			readStream.on('data', chunk => (chunks += chunk.toString()))

			readStream.on('error', reject)

			readStream.on('end', () => resolve(chunks))
		})
	}
}

export default StreamFileReader
