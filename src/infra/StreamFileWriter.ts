import fs from 'fs'

import FileWriter from '@app/contracts/FileWriter'

class StreamFileWriter implements FileWriter {
	async execute(params: FileWriter.Params) {
		const writeStream = fs.createWriteStream(`${params.path}/${params.name}`)

		writeStream.write('aef35ghhjdk74hja83ksnfjk888sfsf', 'ascii')

		writeStream.on('finish', () => {
			console.log('wrote all data to file')
		})

		writeStream.end()
	}
}

export default StreamFileWriter
