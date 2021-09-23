import GenerateImageUseCaseFactory from '@main/factories/usecases/GenerateImageUseCaseFactory'

async function main() {
	const generateImageUseCase = GenerateImageUseCaseFactory.make()

	try {
		await Promise.all([
			generateImageUseCase.run({
				name: '100x100-ascii.pbm',
				encoding: 'ascii',
				resolution: { width: 100, height: 100 },
				codeType: 'ascii',
			}),

			generateImageUseCase.run({
				name: '1000x1000-ascii.pbm',
				encoding: 'ascii',
				resolution: { width: 1000, height: 1000 },
				codeType: 'ascii',
			}),

			generateImageUseCase.run({
				name: '1000x1000-binary.pbm',
				encoding: 'binary',
				resolution: { width: 1000, height: 1000 },
				codeType: 'binary',
			}),
		])
	} catch (err) {
		console.log((err as Error).message)
	}
}

main()
