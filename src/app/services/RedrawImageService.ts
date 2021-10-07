import FileContentRedrawer from '@app/contracts/FileContentRedrawer'
import FileReader from '@app/contracts/FileReader'
import FileWriter from '@app/contracts/FileWriter'
import ReadFileError from '@app/errors/ReadFileError'
import RedrawFileError from '@app/errors/RedrawFileError'

import RedrawImageUnexpectedError from '@domain/errors/RedrawImageUnexpectedError'
import RedrawImageUseCase from '@domain/usecases/RedrawImageUseCase'

class RedrawImageService implements RedrawImageUseCase {
	constructor(
		private readonly inputFilePath: string,
		private readonly outputFilePath: string,
		private readonly fileReader: FileReader,
		private readonly fileContentRedrawer: FileContentRedrawer,
		private readonly fileWriter: FileWriter
	) {}

	async run({
		encoding,
		inputFileName,
		outputFileName,
	}: RedrawImageUseCase.Params) {
		try {
			const fileContent = await this.fileReader.execute({
				name: inputFileName,
				encoding,
				path: this.inputFilePath,
			})

			if (
				typeof fileContent.header !== 'string' ||
				typeof fileContent.content !== 'string'
			) {
				throw new ReadFileError()
			}

			const redrawedContent = await this.fileContentRedrawer.execute({
				encoding,
				file: {
					header: fileContent.header,
					content: fileContent.content,
				},
			})

			if (
				typeof redrawedContent.header !== 'string' ||
				typeof redrawedContent.content !== 'string'
			) {
				throw new RedrawFileError()
			}

			await this.fileWriter.execute({
				path: this.outputFilePath,
				name: outputFileName,
				content: redrawedContent.header + redrawedContent.content,
				encoding,
			})
		} catch {
			throw new RedrawImageUnexpectedError()
		}
	}
}

export default RedrawImageService
