import BrightenerRedrawImageUseCaseFactory from '@main/factories/usecases/BrightenerRedrawImageUseCaseFactory'
import TwoShadesRedrawImageUseCaseFactory from '@main/factories/usecases/TwoShadesRedrawImageUseCaseFactory'

async function main() {
	const twoShadesRedrawImageUseCase =
		new TwoShadesRedrawImageUseCaseFactory().make()

	const brightenerRedrawImageUseCase =
		new BrightenerRedrawImageUseCaseFactory().make()

	try {
		await twoShadesRedrawImageUseCase.run({
			encoding: 'ascii',
			inputFileName: 'entradaBinario.pgm',
			outputFileName: 'entradaBinarioRedesenhado.pgm',
		})

		await brightenerRedrawImageUseCase.run({
			encoding: 'ascii',
			inputFileName: 'entradaBinarioRedesenhado.pgm',
			outputFileName: 'entradaBinarioClereado.pgm',
		})

		console.log(
			'Gerou os arquivos entradaBinarioRedesenhado.pgm e entradaBinarioClereado.pgm em /tmp'
		)
	} catch (err) {
		console.error(err)
	}
}

main()
