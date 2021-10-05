import TwoShadesRedrawImageUseCaseFactory from '@main/factories/usecases/TwoShadesRedrawImageUseCaseFactory'

async function main() {
	const twoShadesRedrawImageUseCase =
		new TwoShadesRedrawImageUseCaseFactory().make()

	try {
		await twoShadesRedrawImageUseCase.run({
			encoding: 'ascii',
			outputFileExtension: 'pgm',
			inputFileName: 'entradaBinario.pgm',
			outputFileName: 'entradaBinarioRedesenhado.pgm',
		})

		console.log('Gerou o arquivo entradaBinarioRedesenhado.pgm em /tmp')
	} catch (err) {
		console.error(err)
	}
}

main()
