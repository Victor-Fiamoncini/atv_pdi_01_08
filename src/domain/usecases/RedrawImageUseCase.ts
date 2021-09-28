import { ImageCodeType } from '@shared/types'

namespace RedrawImageUseCase {
	export type Params = {
		name: string
		encoding: string
		codeType: ImageCodeType
	}
}

interface RedrawImageUseCase {
	run(params: RedrawImageUseCase.Params): Promise<void>
}

export default RedrawImageUseCase
