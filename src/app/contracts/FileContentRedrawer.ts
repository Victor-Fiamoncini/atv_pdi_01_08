import { ImageCodeType } from '@shared/types'

namespace FileContentRedrawer {
	export type Params = {
		name: string
		content: string
		codeType: ImageCodeType
	}
}

interface FileContentRedrawer {
	execute(params: FileContentRedrawer.Params): Promise<string>
}

export default FileContentRedrawer
