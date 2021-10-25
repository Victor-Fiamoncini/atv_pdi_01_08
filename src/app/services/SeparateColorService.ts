import { Color } from '@shared/types'

import FileColorSeparator from '@app/contracts/FileColorSeparator'
import FileReader from '@app/contracts/FileReader'
import FileWriter from '@app/contracts/FileWriter'
import ReadFileError from '@app/errors/ReadFileError'

import SeparateColorUnexpectedError from '@domain/errors/SeparateColorUnexpectedError'
import SeparateColorUseCase from '@domain/usecases/SeparateColorUseCase'

class SeparateColorService implements SeparateColorUseCase {
	private readonly colors: Color[] = ['R', 'G', 'B']

	constructor(
		private readonly inputFilePath: string,
		private readonly outputFilePath: string,
		private readonly fileReader: FileReader,
		private readonly fileColorSeparator: FileColorSeparator,
		private readonly fileWriter: FileWriter
	) {}

	async run({
		encoding,
		inputFileName,
		outputFileName,
	}: SeparateColorUseCase.Params) {
		try {
			const fileContent = await this.fileReader.execute({
				name: inputFileName,
				encoding,
				path: this.inputFilePath,
			})

			if (!fileContent) {
				throw new ReadFileError()
			}

			const recolorPromises = this.colors.map(async color => {
				const recoloredFile = await this.fileColorSeparator.execute({
					encoding,
					color,
					file: fileContent,
				})

				const fileExtension = outputFileName.substring(
					outputFileName.lastIndexOf('.') + 1
				)

				const fileName = outputFileName.split('.')[0]

				await this.fileWriter.execute({
					path: this.outputFilePath,
					name: `${fileName}${color}.${fileExtension}`,
					content: recoloredFile.header + recoloredFile.content,
					encoding,
				})
			})

			await Promise.all(recolorPromises)
		} catch {
			throw new SeparateColorUnexpectedError()
		}
	}
}

export default SeparateColorService
