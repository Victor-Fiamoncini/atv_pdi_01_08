interface FileGenerator {
	execute(filePath: string, resolution: number, encoding: string): Promise<void>
}

export default FileGenerator
