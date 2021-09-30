import { Encoding } from '@shared/types'

namespace FileWriter {
	export type Params = {
		path: string
		name: string
		content: string
		encoding: Encoding
	}
}

interface FileWriter {
	execute(params: FileWriter.Params): Promise<void>
}

export default FileWriter
