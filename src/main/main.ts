import RedrawImageUseCaseFactory from '@main/factories/usecases/RedrawImageUseCaseFactory'

async function main() {
	const redrawImageUseCase = RedrawImageUseCaseFactory.make()

	try {
		await redrawImageUseCase.run({
			codeType: 'ascii',
			encoding: 'ascii',
			inputFileName: 'entradaBinario.pgm',
			outputFileName: 'entradaBinario2.pgm',
		})
	} catch (err) {
		console.error(err)
	}
}

main()
