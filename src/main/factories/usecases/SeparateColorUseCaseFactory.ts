import SeparateColorService from '@app/services/SeparateColorService'

import PPMMemoryFileColorSeparator from '@infra/color_separators/PPMMemoryFileColorSeparator'
import PromisesFileReader from '@infra/readers/PromisesFileReader'
import StreamFileWriter from '@infra/writers/StreamFileWriter'

import SeparateColorUseCaseAbstractFactory from '@main/abstract_factories/usecases/SeparateColorUseCaseAbstractFactory '
import Env from '@main/config/Env'

// prettier-ignore
class SeparateColorUseCaseFactory implements SeparateColorUseCaseAbstractFactory {
	make() {
		const fileColorSeparator = new PPMMemoryFileColorSeparator()
		const fileReader = new PromisesFileReader()
		const fileWriter = new StreamFileWriter()

		return new SeparateColorService(
			Env.DEFAULT_SAMPLES_PATH,
			Env.DEFAULT_TMP_PATH,
			fileReader,
			fileColorSeparator,
			fileWriter
		)
	}
}

export default SeparateColorUseCaseFactory
