import { Color, Encoding, File } from '@shared/types'

namespace FileColorSeparator {
	export type Params = {
		encoding: Encoding
		file: File
		color: Color
	}

	export type Return = File
}

interface FileColorSeparator {
	execute(params: FileColorSeparator.Params): Promise<FileColorSeparator.Return>
}

export default FileColorSeparator
