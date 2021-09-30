import { Encoding, Extension, File } from '@shared/types'

namespace FileContentRedrawer {
	export type Params = {
		encoding: Encoding
		extension: Extension
		file: File
	}

	export type Return = File
}

interface FileContentRedrawer {
	execute(
		params: FileContentRedrawer.Params
	): Promise<FileContentRedrawer.Return>
}

export default FileContentRedrawer
