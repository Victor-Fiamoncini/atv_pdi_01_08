import FileContentRedrawer from '@app/contracts/FileContentRedrawer'
import FileReader from '@app/contracts/FileReader'
import FileWriter from '@app/contracts/FileWriter'
import ReadFileError from '@app/errors/ReadFileError'

import GenerateImageUnexpectedError from '@domain/errors/GenerateImageUnexpectedError'
import RedrawImageUseCase from '@domain/usecases/RedrawImageUseCase'

class RedrawImageService implements RedrawImageUseCase {
	constructor(
		private readonly filePath: string,
		private readonly fileContentRedrawer: FileContentRedrawer,
		private readonly fileReader: FileReader,
		private readonly fileWriter: FileWriter
	) {}

	async run({ name, encoding, codeType }: RedrawImageUseCase.Params) {
		try {
			const fileContent = await this.fileReader.execute({
				name,
				encoding,
				path: this.filePath,
			})

			if (!fileContent) {
				throw new ReadFileError()
			}

			const redrawedContent = await this.fileContentRedrawer.execute({
				name,
				codeType,
				content: fileContent,
			})

			await this.fileWriter.execute({
				path: this.filePath,
				name,
				content: redrawedContent,
				encoding,
			})
		} catch {
			throw new GenerateImageUnexpectedError()
		}
	}
}

export default RedrawImageService
