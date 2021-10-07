import GenerateImageService from '@app/services/GenerateImageService'

import PBMMemoryFileContentDrawer from '@infra/drawers/PBMMemoryFileContentDrawer'
import StreamFileWriter from '@infra/writers/StreamFileWriter'

import GenerateImageUseCaseAbstractFactory from '@main/abstract_factories/usecases/GenerateImageUseCaseAbstractFactory'
import Env from '@main/config/Env'

// prettier-ignore
class GenerateImageUseCaseFactory implements GenerateImageUseCaseAbstractFactory {
	make() {
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
