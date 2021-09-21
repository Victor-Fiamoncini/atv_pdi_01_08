import FileWriter from '@app/contracts/FileWriter'

import GenerateImageUnexpectedError from '@domain/errors/GenerateImageUnexpectedError'
import GenerateImageUseCase from '@domain/usecases/GenerateImageUseCase'

class GenerateImageService implements GenerateImageUseCase {
	constructor(
		private readonly filePath: string,
		private readonly fileWriter: FileWriter
	) {}

	async run(params: GenerateImageUseCase.Params) {
		try {
			await this.fileWriter.execute({
				name: params.name,
				path: this.filePath,
				content: 'hello',
				encoding: params.encoding,
				resolution: params.resolution,
			})
		} catch {
			throw new GenerateImageUnexpectedError()
		}
	}
}

export default GenerateImageService
