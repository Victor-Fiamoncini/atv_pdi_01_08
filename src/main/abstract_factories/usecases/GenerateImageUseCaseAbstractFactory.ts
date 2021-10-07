import GenerateImageUseCase from '@domain/usecases/GenerateImageUseCase'

interface GenerateImageUseCaseAbstractFactory {
	make(): GenerateImageUseCase
}

export default GenerateImageUseCaseAbstractFactory
