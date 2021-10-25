import SeparateColorUseCase from '@domain/usecases/SeparateColorUseCase'

interface SeparateColorUseCaseAbstractFactory {
	make(): SeparateColorUseCase
}

export default SeparateColorUseCaseAbstractFactory
