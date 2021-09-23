import { Resolution } from '@shared/types'

import FileContentDrawer from '@app/contracts/FileContentDrawer'

class PBMMemoryFileContentDrawer implements FileContentDrawer {
	private drawAscii(name: string, resolution: Resolution) {
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

	private drawBinary(name: string, resolution: Resolution) {
		return 'binary draw'
	}

	async execute({ name, resolution, type }: FileContentDrawer.Params) {
		if (type === 'ascii') {
			return this.drawAscii(name, resolution)
		}

		return this.drawBinary(name, resolution)
	}
}

export default PBMMemoryFileContentDrawer
