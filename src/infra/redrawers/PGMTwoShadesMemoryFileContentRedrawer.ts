import { File } from '@shared/types'

import FileContentRedrawer from '@app/contracts/FileContentRedrawer'

import InvalidFileEncodingError from '@infra/errors/InvalidFileEncodingError'

class PGMTwoShadesMemoryFileContentRedrawer implements FileContentRedrawer {
	private readonly threshold: number = 128
	private readonly bitsQuantity: number = 5

	private redrawAsciiType(file: File) {
		const lines = file.content.split('\n')

		let redrawedContent = ''
		let firstPixel: number, secondPixel: number

		if (this.bitsQuantity === 5) {
			firstPixel = 31
			secondPixel = 0
		}

		if (this.bitsQuantity === 8) {
			firstPixel = 255
			secondPixel = 0
		}

		lines.forEach(line => {
			const parsedLine = Number(line)

			if (Number.isInteger(parsedLine)) {
				if (parsedLine > this.threshold) {
					redrawedContent += `${firstPixel}\n`
				} else {
					redrawedContent += `${secondPixel}\n`
				}
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

export default PGMTwoShadesMemoryFileContentRedrawer
