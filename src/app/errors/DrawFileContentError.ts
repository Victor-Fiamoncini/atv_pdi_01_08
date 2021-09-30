class DrawFileContentError extends Error {
	constructor() {
		super('Error to draw the specified content in file')

		this.name = 'DrawFileContentError'
	}
}

export default DrawFileContentError
