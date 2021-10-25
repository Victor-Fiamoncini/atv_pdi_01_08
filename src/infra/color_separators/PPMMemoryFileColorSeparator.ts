import FileColorSeparator from '@app/contracts/FileColorSeparator'

import InvalidFileEncodingError from '@infra/errors/InvalidFileEncodingError'

class PPMMemoryFileColorSeparator implements FileColorSeparator {
	async execute({ encoding, file, color }: FileColorSeparator.Params) {
		if (encoding === 'ascii') {
			let redrawedHeader = file.header
			let redrawedContent = ''

			redrawedHeader = redrawedHeader.replace('P3', 'P2')

			const filterredContent = file.content
				.split('\n')
				.filter(line => Number.isInteger(Number(line)))

			const colorSeparatorMapper = {
				R: () => {
					for (let i = 0; i < filterredContent.length; i += 3)
						redrawedContent += `${parseInt(filterredContent[i])}\n`

					redrawedContent = `255\n${redrawedContent}`

					return {
						header: redrawedHeader,
						content: redrawedContent,
					}
				},
				G: () => {
					for (let i = 1; i < filterredContent.length; i += 3)
						redrawedContent += `${parseInt(filterredContent[i])}\n`

					redrawedContent = `255\n${redrawedContent}`

					return {
						header: redrawedHeader,
						content: redrawedContent,
					}
				},
				B: () => {
					for (let i = 2; i < filterredContent.length; i += 3)
						redrawedContent += `${parseInt(filterredContent[i])}\n`

					redrawedContent = `255\n${redrawedContent}`

					return {
						header: redrawedHeader,
						content: redrawedContent,
					}
				},
			}

			if (color in colorSeparatorMapper) {
				return colorSeparatorMapper[color]()
			}
		}

		throw new InvalidFileEncodingError()
	}
}

export default PPMMemoryFileColorSeparator
