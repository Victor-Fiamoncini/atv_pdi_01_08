class GenerateImageUnexpectedError extends Error {
	constructor() {
		super('Error to create the specified image')

		this.name = 'GenerateImageUnexpectedError'
	}
}

export default GenerateImageUnexpectedError
