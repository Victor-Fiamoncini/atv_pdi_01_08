import GenerateImageService from '@app/services/GenerateImageService'

import GenerateImageUseCase from '@domain/usecases/GenerateImageUseCase'

import MemoryFileContentDrawer from '@infra/MemoryFileContentDrawer'
import StreamFileWriter from '@infra/StreamFileWriter'

import Env from '@main/config/Env'

class GenerateImageUseCaseFactory {
	static make(): GenerateImageUseCase {
		const fileContentDrawer = new MemoryFileContentDrawer()
		const fileWriter = new StreamFileWriter()

		return new GenerateImageService(
			Env.DEFAULT_FILE_PATH,
			fileContentDrawer,
			fileWriter
		)
	}
}

export default GenerateImageUseCaseFactory
