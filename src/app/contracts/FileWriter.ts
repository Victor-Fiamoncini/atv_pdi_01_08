namespace FileWriter {
	export type Params = {
		path: string
		name: string
		content: string
		encoding: string
	}
}

interface FileWriter {
	execute(params: FileWriter.Params): Promise<void>
}

export default FileWriter
