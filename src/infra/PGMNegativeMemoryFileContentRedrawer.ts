import { File } from '@shared/types'

import FileContentRedrawer from '@app/contracts/FileContentRedrawer'

import InvalidFileTypeError from '@infra/errors/InvalidFileTypeError'

class PGMNegativeMemoryFileContentRedrawer implements FileContentRedrawer {
	private redrawAsciiType(file: File) {
		const lines = file.content.split(' ')

		let redrawedHeader = file.header
		let redrawedContent = ''

		redrawedHeader = redrawedHeader.replace('P1', 'P2')

		lines.forEach(line => {
			const parsedLine = Number(line)

			if (Number.isInteger(parsedLine)) {
				if (parsedLine === 0) {
					redrawedContent += '1 \n'
				} else {
					redrawedContent += '0 \n'
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

export default PGMNegativeMemoryFileContentRedrawer
