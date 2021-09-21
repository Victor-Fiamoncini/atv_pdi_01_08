import { Resolution } from '@shared/types'

namespace FileWriter {
	export type Params = {
		path: string
		name: string
		resolution: Resolution
		content: string
		encoding: string
	}
}

interface FileWriter {
	execute(params: FileWriter.Params): Promise<void>
}

export default FileWriter
