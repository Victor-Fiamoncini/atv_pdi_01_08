import { Encoding } from '@shared/types'

namespace SeparateColorUseCase {
	export type Params = {
		encoding: Encoding
		inputFileName: string
		outputFileName: string
	}
}

interface SeparateColorUseCase {
	run(params: SeparateColorUseCase.Params): Promise<void>
}

export default SeparateColorUseCase
