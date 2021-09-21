import fs from 'fs'

import FileWriter from '@app/contracts/FileWriter'

class StreamFileWriter implements FileWriter {
	async execute(params: FileWriter.Params) {
		const writeStream = fs.createWriteStream(`${params.path}/${params.name}`)

		writeStream.write(params.content, params.encoding as BufferEncoding)
		writeStream.end()
	}
}

export default StreamFileWriter
