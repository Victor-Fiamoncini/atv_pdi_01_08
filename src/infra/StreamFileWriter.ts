import { createWriteStream } from 'fs'

import FileWriter from '@app/contracts/FileWriter'

class StreamFileWriter implements FileWriter {
	async execute({ path, name, content, encoding }: FileWriter.Params) {
		const writeStream = createWriteStream(`${path}/${name}`)

		writeStream.write(content, encoding as BufferEncoding)
		writeStream.end()
	}
}

export default StreamFileWriter
