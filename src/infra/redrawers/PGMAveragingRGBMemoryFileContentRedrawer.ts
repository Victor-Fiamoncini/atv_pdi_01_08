import { File } from '@shared/types'

import FileContentRedrawer from '@app/contracts/FileContentRedrawer'

import InvalidFileEncodingError from '@infra/errors/InvalidFileEncodingError'

class PGMAveragingRGBMemoryFileContentRedrawer implements FileContentRedrawer {
	private redrawAsciiType(file: File) {
		let redrawedHeader = file.header
		let redrawedContent = ''

		redrawedHeader = redrawedHeader.replace('P3', 'P2')

		const filterredContent = file.content
			.split('\n')
			.filter(line => Number.isInteger(Number(line)))

		for (let i = 1; i < filterredContent.length - 2; i++) {
			const rgbSum =
				Number(filterredContent[i]) +
				Number(filterredContent[i + 1]) +
				Number(filterredContent[i + 2])

			const lineAverage = String(rgbSum / 3)

			redrawedContent += `${parseInt(lineAverage)}\n`
		}

		redrawedContent = `255\n${redrawedContent}`

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

export default PGMAveragingRGBMemoryFileContentRedrawer
