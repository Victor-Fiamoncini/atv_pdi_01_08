import { File } from '@shared/types'

import FileContentRedrawer from '@app/contracts/FileContentRedrawer'

import InvalidFileEncodingError from '@infra/errors/InvalidFileEncodingError'

class PGMTwoShadesMemoryFileContentRedrawer implements FileContentRedrawer {
	private readonly threshold: number = 128
	private readonly bits: number = 5

	private redrawAsciiType(file: File) {
		const lines = file.content.split('\n')

		const redrawedHeader = file.header
		let redrawedContent = ''

		let firstPixel = 255
		let secondPixel = 0

		if (this.bits === 5) {
			firstPixel = 31
			secondPixel = 0
		}

		if (this.bits === 8) {
			firstPixel = 255
			secondPixel = 0
		}

		lines.forEach(line => {
			const parsedLine = Number(line)

			if (Number.isInteger(parsedLine)) {
				if (parsedLine > this.threshold) {
					redrawedContent += firstPixel + ' '
				} else {
					redrawedContent += secondPixel + ' '
				}
			}
		})

		return {
			redrawedHeader,
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

export default PGMTwoShadesMemoryFileContentRedrawer
