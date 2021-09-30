import RedrawImageUseCase from '@domain/usecases/RedrawImageUseCase'

interface RedrawImageUseCaseAbstractFactory {
	make(): RedrawImageUseCase
}

export default RedrawImageUseCaseAbstractFactory
