import { resolve } from 'path'

class Env {
	private static readonly ROOT_PATH = resolve(__dirname, '..', '..', '..')

	static readonly DEFAULT_TMP_PATH = resolve(this.ROOT_PATH, 'tmp')
	static readonly DEFAULT_SAMPLES_PATH = resolve(this.ROOT_PATH, 'samples')
}

export default Env
