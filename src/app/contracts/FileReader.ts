namespace FileReader {
	export type Params = {
		path: string
		name: string
		encoding: string
	}
}

interface FileReader {
	execute(params: FileReader.Params): Promise<string>
}

export default FileReader
