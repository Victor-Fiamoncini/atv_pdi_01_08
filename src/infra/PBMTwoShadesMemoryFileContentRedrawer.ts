import FileContentRedrawer from '@app/contracts/FileContentRedrawer'

class PBMTwoShadesMemoryFileContentRedrawer implements FileContentRedrawer {
	private readonly threshold = 150

	async execute({ encoding, extension, file }: FileContentRedrawer.Params) {
		const lines = file.content.split('\n')

		let redrawedHeader = file.header
		let redrawedContent = ''

		if (encoding === 'ascii' && extension === 'pbm') {
			redrawedHeader = redrawedHeader.replace('P2', 'P1')
		}

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
			header: redrawedHeader,
			content: redrawedContent,
		}
	}
}

export default PBMTwoShadesMemoryFileContentRedrawer
