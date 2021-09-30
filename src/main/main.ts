import NegativeRedrawImageUseCaseFactory from '@main/factories/usecases/NegativeRedrawImageUseCaseFactory'
import TwoShadesRedrawImageUseCaseFactory from '@main/factories/usecases/TwoShadesRedrawImageUseCaseFactory'

async function main() {
	const twoShadesRedrawImageUseCase =
		new TwoShadesRedrawImageUseCaseFactory().make()

	const negativeRedrawImageUseCaseFactory =
		new NegativeRedrawImageUseCaseFactory().make()

	try {
		await twoShadesRedrawImageUseCase.run({
			encoding: 'ascii',
			outputFileExtension: 'pbm',
			inputFileName: 'entradaBinario.pgm',
			outputFileName: 'entradaBinario.pbm',
		})

		await negativeRedrawImageUseCaseFactory.run({
			encoding: 'ascii',
			outputFileExtension: 'pgm',
			inputFileName: 'entradaBinario.pbm',
			outputFileName: 'entradaBinarioToPGM.pgm',
		})

		console.log(
			'Gerou os arquivos entradaBinario.pbm (duas tonalidades (preto ou branco)) e entradaBinarioToPGM.pgm (filtro negativo) em /tmp'
		)
	} catch (err) {
		console.error(err)
	}
}

main()
