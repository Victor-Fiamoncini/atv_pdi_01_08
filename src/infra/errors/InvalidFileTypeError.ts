class InvalidFileTypeError extends Error {
	constructor() {
		super('Invalid file type provided')

		this.name = 'InvalidFileTypeError'
	}
}

export default InvalidFileTypeError
