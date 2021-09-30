import TwoShadesRedrawImageUseCaseFactory from '@main/factories/usecases/TwoShadesRedrawImageUseCaseFactory'

async function main() {
	const twoShadesRedrawImageUseCase =
		new TwoShadesRedrawImageUseCaseFactory().make()

	try {
		await twoShadesRedrawImageUseCase.run({
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
