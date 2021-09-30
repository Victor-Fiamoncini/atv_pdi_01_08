import { Encoding, File } from '@shared/types'

namespace FileReader {
	export type Params = {
		path: string
		name: string
		encoding: Encoding
	}

	export type Return = File
}

interface FileReader {
	execute(params: FileReader.Params): Promise<FileReader.Return>
}

export default FileReader
