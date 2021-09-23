import { Resolution } from '@shared/types'

import FileContentDrawer from '@app/contracts/FileContentDrawer'

class PBMMemoryFileContentDrawer implements FileContentDrawer {
	private readonly hexCodes = ['000000', 'FFFFFF']

	private drawAsciiType(name: string, resolution: Resolution) {
		const type = 'P1\n'
		const headerComment = `# ${name}\n`
		const specs = `${resolution.width} ${resolution.height}\n`

		let pixelsMatrix = ''

		for (let y = 0; y < resolution.height; y++) {
			let line = ''

			for (let x = 0; x < resolution.width; x++) {
				const randomPixel = Math.round(Math.random())

				line += `${randomPixel} `

				if (x === resolution.width - 1) {
					line.trimRight()
					line += '\n'
				}
			}

			pixelsMatrix += line
		}

		return type + headerComment + specs + pixelsMatrix
	}

	private drawBinaryType(resolution: Resolution) {
		const type = 'P4 '
		const specs = `${resolution.width} ${resolution.height} `

		let body = ''

		for (let y = 0; y < resolution.height; y++) {
			for (let x = 0; x < resolution.width; x++) {
				const randomHexIndex = Math.round(Math.random())

				body += this.hexCodes[randomHexIndex]
			}
		}

		return type + specs + body
	}

	async execute({ name, resolution, codeType }: FileContentDrawer.Params) {
		if (codeType === 'ascii') {
			return this.drawAsciiType(name, resolution)
		}

		return this.drawBinaryType(resolution)
	}
}

export default PBMMemoryFileContentDrawer
