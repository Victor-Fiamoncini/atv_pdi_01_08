import FileContentRedrawer from '@app/contracts/FileContentRedrawer'

class PBMTwoShadesMemoryFileContentRedrawer implements FileContentRedrawer {
	private readonly threshold = 100

	async execute({ name, codeType, file }: FileContentRedrawer.Params) {
		const content = file.content.split('\n')

		return {
			header: '',
			content: 'hello',
		}
	}
}

export default PBMTwoShadesMemoryFileContentRedrawer
