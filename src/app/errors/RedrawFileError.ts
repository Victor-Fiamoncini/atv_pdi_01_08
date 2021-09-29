class RedrawFileError extends Error {
	constructor() {
		super('Error to redraw the specified file')

		this.name = 'RedrawFileError'
	}
}

export default RedrawFileError
