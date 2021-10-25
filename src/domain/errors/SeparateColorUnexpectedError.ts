class SeparateColorUnexpectedError extends Error {
	constructor() {
		super('Error to separate colors of specified image')

		this.name = 'SeparateColorUnexpectedError'
	}
}

export default SeparateColorUnexpectedError
