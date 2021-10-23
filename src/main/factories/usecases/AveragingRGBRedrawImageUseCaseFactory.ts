import RedrawImageService from '@app/services/RedrawImageService'

import PromisesFileReader from '@infra/readers/PromisesFileReader'
import PGMAveragingRGBMemoryFileContentRedrawer from '@infra/redrawers/PGMAveragingRGBMemoryFileContentRedrawer'
import StreamFileWriter from '@infra/writers/StreamFileWriter'

import RedrawImageUseCaseAbstractFactory from '@main/abstract_factories/usecases/RedrawImageUseCaseAbstractFactory'
import Env from '@main/config/Env'

// prettier-ignore
class AveragingRGBRedrawImageUseCaseFactory implements RedrawImageUseCaseAbstractFactory {
	make() {
		const fileContentRedrawer = new PGMAveragingRGBMemoryFileContentRedrawer()
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

export default AveragingRGBRedrawImageUseCaseFactory
