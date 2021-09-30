import { Encoding, Resolution } from '@shared/types'

namespace GenerateImageUseCase {
	export type Params = {
		encoding: Encoding
		name: string
		resolution: Resolution
	}
}

interface GenerateImageUseCase {
	run(params: GenerateImageUseCase.Params): Promise<void>
}

export default GenerateImageUseCase
