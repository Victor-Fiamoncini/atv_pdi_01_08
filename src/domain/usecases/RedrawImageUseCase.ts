import { Encoding, Extension } from '@shared/types'

namespace RedrawImageUseCase {
	export type Params = {
		encoding: Encoding
		inputFileName: string
		outputFileName: string
		outputFileExtension: Extension
	}
}

interface RedrawImageUseCase {
	run(params: RedrawImageUseCase.Params): Promise<void>
}

export default RedrawImageUseCase
