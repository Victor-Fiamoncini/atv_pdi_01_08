import { ImageType, Resolution } from '@shared/types'

namespace GenerateImageUseCase {
	export type Params = {
		name: string
		resolution: Resolution
		encoding: string
		type: ImageType
	}
}

interface GenerateImageUseCase {
	run(params: GenerateImageUseCase.Params): Promise<void>
}

export default GenerateImageUseCase
