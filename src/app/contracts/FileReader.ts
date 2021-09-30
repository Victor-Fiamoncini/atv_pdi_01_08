import { Encoding } from '@shared/types'

namespace FileReader {
	export type Params = {
		path: string
		name: string
		encoding: Encoding
	}

	export type Return = {
		header: string
		content: string
	}
}

interface FileReader {
	execute(params: FileReader.Params): Promise<FileReader.Return>
}

export default FileReader
