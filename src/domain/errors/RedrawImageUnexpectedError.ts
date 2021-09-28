class RedrawImageUnexpectedError extends Error {
	constructor() {
		super('Error to redraw the specified image')

		this.name = 'RedrawImageUnexpectedError'
	}
}

export default RedrawImageUnexpectedError
