import GenerateImageService from '@app/services/GenerateImageService'

import GenerateImageUseCase from '@domain/usecases/GenerateImageUseCase'

import PBMMemoryFileContentDrawer from '@infra/PBMMemoryFileContentDrawer'
import StreamFileWriter from '@infra/StreamFileWriter'

import Env from '@main/config/Env'

class GenerateImageUseCaseFactory {
	static make(): GenerateImageUseCase {
		const fileContentDrawer = new PBMMemoryFileContentDrawer()
		const fileWriter = new StreamFileWriter()

		return new GenerateImageService(
			Env.DEFAULT_TMP_PATH,
			fileContentDrawer,
			fileWriter
		)
	}
}

export default GenerateImageUseCaseFactory
