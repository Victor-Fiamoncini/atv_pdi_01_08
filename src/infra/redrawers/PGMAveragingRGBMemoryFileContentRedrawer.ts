import { File } from '@shared/types'

import FileContentRedrawer from '@app/contracts/FileContentRedrawer'

import InvalidFileEncodingError from '@infra/errors/InvalidFileEncodingError'

class PGMAveragingRGBMemoryFileContentRedrawer implements FileContentRedrawer {
	private readonly threshold: number = 128

	private redrawAsciiType(file: File) {
		let redrawedHeader = file.header
		redrawedHeader = redrawedHeader.replace('P3', 'P2')

		const lines = file.content.split('\n')
		let redrawedContent = ''
		let totalPixelsCount = 0

		for (let index = 0; index < 100; index++) {
			console.log(lines[index])
		}

		const totalByteAmount = lines.reduce((acc, line) => {
			const parsedLine = Number(line)

			if (Number.isInteger(parsedLine)) {
				totalPixelsCount++

				return acc + parsedLine
			}

			return 0
		}, 0)

		const averagePixelValue = totalByteAmount / totalPixelsCount

		lines.forEach(line => {
			const parsedLine = Number(line)

			if (Number.isInteger(parsedLine)) {
				if (parsedLine <= this.threshold) {
					redrawedContent += `${parseInt(averagePixelValue.toString())}\n`
				} else {
					redrawedContent += '255\n'
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

export default PGMAveragingRGBMemoryFileContentRedrawer
