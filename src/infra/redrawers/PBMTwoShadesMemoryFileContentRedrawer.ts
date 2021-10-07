import { File } from '@shared/types'

import FileContentRedrawer from '@app/contracts/FileContentRedrawer'

import InvalidFileEncodingError from '@infra/errors/InvalidFileEncodingError'

class PBMTwoShadesMemoryFileContentRedrawer implements FileContentRedrawer {
	private readonly threshold = 128
	private readonly firstPixel = 1
	private readonly secondPixel = 0

	private redrawAsciiType(file: File) {
		const lines = file.content.split('\n')

		let redrawedHeader = file.header
		let redrawedContent = ''

		redrawedHeader = redrawedHeader.replace('P2', 'P1')

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

export default PBMTwoShadesMemoryFileContentRedrawer
