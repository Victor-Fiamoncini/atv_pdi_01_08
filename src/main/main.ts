import RedrawImageUseCaseFactory from '@main/factories/usecases/RedrawImageUseCaseFactory'

async function main() {
	const redrawImageUseCase = RedrawImageUseCaseFactory.make()

	try {
		await redrawImageUseCase.run({
			encoding: 'ascii',
			outputFileExtension: 'pbm',
			inputFileName: 'entradaBinario.pgm',
			outputFileName: 'entradaBinario.pbm',
		})
	} catch (err) {
		console.error(err)
	}
}

main()
