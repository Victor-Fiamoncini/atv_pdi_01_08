import { Encoding } from '@shared/types'

namespace RedrawImageUseCase {
	export type Params = {
		encoding: Encoding
		inputFileName: string
		outputFileName: string
	}
}

interface RedrawImageUseCase {
	run(params: RedrawImageUseCase.Params): Promise<void>
}

export default RedrawImageUseCase
