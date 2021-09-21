import FileGenerator from '@app/contracts/FileGenerator'

import GenerateImageUnexpectedError from '@domain/errors/GenerateImageUnexpectedError'
import GenerateImageUseCase from '@domain/usecases/GenerateImageUseCase'

class GenerateImageService implements GenerateImageUseCase {
	constructor(private readonly fileGenerator: FileGenerator) {}

	async run(params: GenerateImageUseCase.Params) {
		try {
			await this.fileGenerator.execute(
				params.filePath,
				params.resolution,
				params.encoding
			)
		} catch {
			throw new GenerateImageUnexpectedError()
		}
	}
}

export default GenerateImageService
