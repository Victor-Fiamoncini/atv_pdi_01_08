import RedrawImageService from '@app/services/RedrawImageService'

import PGMNegativeMemoryFileContentRedrawer from '@infra/PGMNegativeMemoryFileContentRedrawer'
import PromisesFileReader from '@infra/PromisesFileReader'
import StreamFileWriter from '@infra/StreamFileWriter'

import RedrawImageUseCaseAbstractFactory from '@main/abstract_factories/usecases/RedrawImageUseCaseAbstractFactory'
import Env from '@main/config/Env'

// prettier-ignore
class NegativeRedrawImageUseCaseFactory implements RedrawImageUseCaseAbstractFactory {
	make() {
		const fileContentRedrawer = new PGMNegativeMemoryFileContentRedrawer()
		const fileReader = new PromisesFileReader()
		const fileWriter = new StreamFileWriter()

		return new RedrawImageService(
			Env.DEFAULT_TMP_PATH,
			Env.DEFAULT_TMP_PATH,
			fileReader,
			fileContentRedrawer,
			fileWriter
		)
	}
}

export default NegativeRedrawImageUseCaseFactory
