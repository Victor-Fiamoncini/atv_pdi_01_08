import FileGenerator from '@app/contracts/FileGenerator'

class FsFileGenerator implements FileGenerator {
	execute(
		filePath: string,
		resolution: number,
		encoding: string
	): Promise<void> {
		throw new Error('Method not implemented.')
	}
}

export default FsFileGenerator
