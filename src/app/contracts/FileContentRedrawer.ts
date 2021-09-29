import { ImageCodeType } from '@shared/types'

namespace FileContentRedrawer {
	export type Params = {
		name: string
		file: {
			header: string
			content: string
		}
		codeType: ImageCodeType
	}

	export type Return = {
		header: string
		content: string
	}
}

interface FileContentRedrawer {
	execute(
		params: FileContentRedrawer.Params
	): Promise<FileContentRedrawer.Return>
}

export default FileContentRedrawer
