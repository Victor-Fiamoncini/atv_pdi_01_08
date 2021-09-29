import RedrawImageService from '@app/services/RedrawImageService'

import RedrawImageUseCase from '@domain/usecases/RedrawImageUseCase'

import PBMTwoShadesMemoryFileContentRedrawer from '@infra/PBMTwoShadesMemoryFileContentRedrawer'
import PromisesFileReader from '@infra/PromisesFileReader'
import StreamFileWriter from '@infra/StreamFileWriter'

import Env from '@main/config/Env'

class RedrawImageUseCaseFactory {
	static make(): RedrawImageUseCase {
		const fileContentRedrawer = new PBMTwoShadesMemoryFileContentRedrawer()
		const fileReader = new PromisesFileReader()
		const fileWriter = new StreamFileWriter()

		return new RedrawImageService(
			Env.DEFAULT_SAMPLES_PATH,
			Env.DEFAULT_TMP_PATH,
			fileContentRedrawer,
			fileReader,
			fileWriter
		)
	}
}

export default RedrawImageUseCaseFactory
