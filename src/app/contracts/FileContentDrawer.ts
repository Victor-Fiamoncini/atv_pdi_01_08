import { Encoding, Resolution } from '@shared/types'

namespace FileContentDrawer {
	export type Params = {
		encoding: Encoding
		name: string
		resolution: Resolution
	}
}

interface FileContentDrawer {
	execute(params: FileContentDrawer.Params): Promise<string>
}

export default FileContentDrawer
