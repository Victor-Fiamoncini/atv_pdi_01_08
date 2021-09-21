import FileContentDrawer from '@app/contracts/FileContentDrawer'

class MemoryFileContentDrawer implements FileContentDrawer {
	async execute({ name, resolution }: FileContentDrawer.Params) {
		const type = 'P1\n'
		const headerComment = `# ${name}\n`
		const specs = `${resolution.width} ${resolution.height}\n`

		let pixelsMatrix = ''

		for (let y = 0; y < resolution.height; y++) {
			let line = ''

			for (let x = 0; x < resolution.width; x++) {
				const randomPixel = Math.round(Math.random())

				line += `${randomPixel} `

				if (x === 23) {
					line.trimRight()
					line += '\n'
				}
			}

			pixelsMatrix += line
		}

		return type + headerComment + specs + pixelsMatrix
	}
}

export default MemoryFileContentDrawer
