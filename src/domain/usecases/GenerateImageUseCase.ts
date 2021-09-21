namespace GenerateImageUseCase {
	export type Params = {
		filePath: string
		resolution: number
		encoding: string
	}
}

interface GenerateImageUseCase {
	run(params: GenerateImageUseCase.Params): Promise<void>
}

export default GenerateImageUseCase
