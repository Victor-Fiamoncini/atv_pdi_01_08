import { ImageCodeType } from '@shared/types'

namespace RedrawImageUseCase {
	export type Params = {
		inputFileName: string
		outputFileName: string
		encoding: string
		codeType: ImageCodeType
	}
}

interface RedrawImageUseCase {
	run(params: RedrawImageUseCase.Params): Promise<void>
}

export default RedrawImageUseCase
