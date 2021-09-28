class ReadFileError extends Error {
	constructor() {
		super('Error to read the specified file')

		this.name = 'ReadFileError'
	}
}

export default ReadFileError
