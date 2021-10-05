import RedrawImageService from '@app/services/RedrawImageService'

import PGMTwoShadesMemoryFileContentRedrawer from '@infra/PGMTwoShadesMemoryFileContentRedrawer'
import PromisesFileReader from '@infra/PromisesFileReader'
import StreamFileWriter from '@infra/StreamFileWriter'

import RedrawImageUseCaseAbstractFactory from '@main/abstract_factories/usecases/RedrawImageUseCaseAbstractFactory'
import Env from '@main/config/Env'

// prettier-ignore
class TwoShadesRedrawImageUseCaseFactory implements RedrawImageUseCaseAbstractFactory {
	make() {
		const fileContentRedrawer = new PGMTwoShadesMemoryFileContentRedrawer()
		const fileReader = new PromisesFileReader()
		const fileWriter = new StreamFileWriter()

		return new RedrawImageService(
			Env.DEFAULT_SAMPLES_PATH,
			Env.DEFAULT_TMP_PATH,
			fileReader,
			fileContentRedrawer,
			fileWriter
		)
	}
}

export default TwoShadesRedrawImageUseCaseFactory
