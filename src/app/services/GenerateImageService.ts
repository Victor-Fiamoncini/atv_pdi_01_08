import FileContentDrawer from '@app/contracts/FileContentDrawer'
import FileWriter from '@app/contracts/FileWriter'

import GenerateImageUnexpectedError from '@domain/errors/GenerateImageUnexpectedError'
import GenerateImageUseCase from '@domain/usecases/GenerateImageUseCase'

class GenerateImageService implements GenerateImageUseCase {
	constructor(
		private readonly filePath: string,
		private readonly fileContentDrawer: FileContentDrawer,
		private readonly fileWriter: FileWriter
	) {}

	async run({ encoding, name, resolution }: GenerateImageUseCase.Params) {
		try {
			const content = await this.fileContentDrawer.execute({
				name,
				resolution,
				encoding,
			})

			await this.fileWriter.execute({
				path: this.filePath,
				name,
				content,
				encoding,
			})
		} catch {
			throw new GenerateImageUnexpectedError()
		}
	}
}

export default GenerateImageService
