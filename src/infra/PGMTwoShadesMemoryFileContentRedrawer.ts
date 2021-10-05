import { File } from '@shared/types'

import FileContentRedrawer from '@app/contracts/FileContentRedrawer'

import InvalidFileTypeError from '@infra/errors/InvalidFileTypeError'

class PGMTwoShadesMemoryFileContentRedrawer implements FileContentRedrawer {
	private readonly threshold = 128
	private readonly firstPixel = 255
	private readonly secondPixel = 0

	private redrawAsciiType(file: File) {
		const lines = file.content.split('\n')

		const redrawedHeader = file.header
		let redrawedContent = ''

		lines.forEach(line => {
			const parsedLine = Number(line)

			if (Number.isInteger(parsedLine)) {
				if (parsedLine > this.threshold) {
					redrawedContent += this.firstPixel + ' '
				} else {
					redrawedContent += this.secondPixel + ' '
				}
			}
		})

		return {
			redrawedHeader,
			redrawedContent,
		}
	}

	async execute({ encoding, extension, file }: FileContentRedrawer.Params) {
		if (encoding === 'ascii' && extension === 'pgm') {
			const { redrawedHeader, redrawedContent } = this.redrawAsciiType(file)

			return {
				header: redrawedHeader,
				content: redrawedContent,
			}
		}

		throw new InvalidFileTypeError()
	}
}

export default PGMTwoShadesMemoryFileContentRedrawer
