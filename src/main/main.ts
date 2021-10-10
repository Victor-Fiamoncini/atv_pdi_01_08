import AveragingRGBRedrawImageUseCaseFactory from '@main/factories/usecases/AveragingRGBRedrawImageUseCaseFactory'

async function main() {
	const averagingRGBRedrawImageUseCase =
		new AveragingRGBRedrawImageUseCaseFactory().make()

	try {
		await averagingRGBRedrawImageUseCase.run({
			encoding: 'ascii',
			inputFileName: 'Fig1.ppm',
			outputFileName: 'Fig1ComMedia.pgm',
		})

		// await averagingRGBRedrawImageUseCase.run({
		// 	encoding: 'ascii',
		// 	inputFileName: 'Fig4.ppm',
		// 	outputFileName: 'Fig4ComMedia.pgm',
		// })

		console.log('Gerou os arquivos Fig1ComMedia.pgm e Fig4ComMedia.pgm em /tmp')
	} catch (err) {
		console.error(err)
	}
}

main()
