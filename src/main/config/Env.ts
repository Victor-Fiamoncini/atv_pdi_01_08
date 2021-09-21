import path from 'path'

class Env {
	static readonly DEFAULT_FILE_PATH = path.resolve(
		__dirname,
		'..',
		'..',
		'..',
		'tmp'
	)
}

export default Env
