class InvalidFileEncodingError extends Error {
	constructor() {
		super('Invalid file encoding provided')

		this.name = 'InvalidFileEncodingError'
	}
}

export default InvalidFileEncodingError
