import { File } from '@shared/types'

import FileContentRedrawer from '@app/contracts/FileContentRedrawer'

import InvalidFileTypeError from '@infra/errors/InvalidFileTypeError'

class PBMTwoShadesMemoryFileContentRedrawer implements FileContentRedrawer {
	private readonly threshold = 150

	private redrawAsciiType(file: File) {
		const lines = file.content.split('\n')

		let redrawedHeader = file.header
		let redrawedContent = ''

		redrawedHeader = redrawedHeader.replace('P2', 'P1')

		lines.forEach(line => {
			const parsedLine = Number(line)

			if (Number.isInteger(parsedLine)) {
				if (parsedLine > this.threshold) {
					redrawedContent += '1 '
				} else {
					redrawedContent += '0 '
				}
			}
		})

		return {
			redrawedHeader,
			redrawedContent,
		}
	}

	async execute({ encoding, extension, file }: FileContentRedrawer.Params) {
		if (encoding === 'ascii' && extension === 'pbm') {
			const { redrawedHeader, redrawedContent } = this.redrawAsciiType(file)

			return {
				header: redrawedHeader,
				content: redrawedContent,
			}
		}

		throw new InvalidFileTypeError()
	}
}

export default PBMTwoShadesMemoryFileContentRedrawer
