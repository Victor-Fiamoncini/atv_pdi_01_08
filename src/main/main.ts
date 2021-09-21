import GenerateImageUseCaseFactory from '@main/factories/usecases/GenerateImageUseCaseFactory'

const generateImageUseCase = GenerateImageUseCaseFactory.make()

generateImageUseCase.run({
	name: '100x100.pbm',
	encoding: 'ascii',
	resolution: { width: 100, height: 100 },
})

generateImageUseCase.run({
	name: '1000x1000.pbm',
	encoding: 'ascii',
	resolution: { width: 1000, height: 1000 },
})
