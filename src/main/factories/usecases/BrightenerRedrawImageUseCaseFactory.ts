import RedrawImageService from '@app/services/RedrawImageService'

import PromisesFileReader from '@infra/readers/PromisesFileReader'
import PGMBrightenerMemoryFileContentRedrawer from '@infra/redrawers/PGMBrightenerMemoryFileContentRedrawer'
import StreamFileWriter from '@infra/writers/StreamFileWriter'

import RedrawImageUseCaseAbstractFactory from '@main/abstract_factories/usecases/RedrawImageUseCaseAbstractFactory'
import Env from '@main/config/Env'

// prettier-ignore
class BrightenerRedrawImageUseCaseFactory implements RedrawImageUseCaseAbstractFactory {
	make() {
		const fileContentRedrawer = new PGMBrightenerMemoryFileContentRedrawer()
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

export default BrightenerRedrawImageUseCaseFactory
