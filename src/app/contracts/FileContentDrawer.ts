import { ImageType, Resolution } from '@shared/types'

namespace FileContentDrawer {
	export type Params = {
		name: string
		resolution: Resolution
		type: ImageType
	}
}

interface FileContentDrawer {
	execute(params: FileContentDrawer.Params): Promise<string>
}

export default FileContentDrawer
