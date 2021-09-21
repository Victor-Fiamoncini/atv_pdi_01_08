namespace GenerateImageUseCase {
	export type Resolution = {
		width: number
		height: number
	}

	export type Params = {
		filePath: string
		resolution: GenerateImageUseCase.Resolution
		encoding: string
	}
}

interface GenerateImageUseCase {
	run(params: GenerateImageUseCase.Params): Promise<void>
}

export default GenerateImageUseCase
