import { File } from '@shared/types'

import FileContentRedrawer from '@app/contracts/FileContentRedrawer'

import InvalidFileEncodingError from '@infra/errors/InvalidFileEncodingError'

class PGMBrightenerMemoryFileContentRedrawer implements FileContentRedrawer {
	private readonly amount: number = 20

	private redrawAsciiType(file: File) {
		const lines = file.content.split('\n')

		let redrawedContent = ''

		lines.forEach(line => {
			const parsedLine = Number(line)

			if (Number.isInteger(parsedLine)) {
				redrawedContent += `${parsedLine + this.amount}\n`
			}
		})

		return {
			redrawedHeader: file.header,
			redrawedContent,
		}
	}

	async execute({ encoding, file }: FileContentRedrawer.Params) {
		if (encoding === 'ascii') {
			const { redrawedHeader, redrawedContent } = this.redrawAsciiType(file)

			return {
				header: redrawedHeader,
				content: redrawedContent,
			}
		}

		throw new InvalidFileEncodingError()
	}
}

export default PGMBrightenerMemoryFileContentRedrawer
