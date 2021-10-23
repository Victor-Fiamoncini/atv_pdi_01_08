import AveragingRGBRedrawImageUseCaseFactory from '@main/factories/usecases/AveragingRGBRedrawImageUseCaseFactory'

async function main() {
	const averagingRGBRedrawImageUseCase =
		new AveragingRGBRedrawImageUseCaseFactory().make()

	try {
		await averagingRGBRedrawImageUseCase.run({
			encoding: 'ascii',
			inputFileName: 'Fig1.ppm',
			outputFileName: 'Fig1ComMediaPorPixel.pgm',
		})

		await averagingRGBRedrawImageUseCase.run({
			encoding: 'ascii',
			inputFileName: 'Fig4.ppm',
			outputFileName: 'Fig4ComMediaPorPixel.pgm',
		})

		console.log(
			'Gerou os arquivos Fig1ComMediaPorPixel.pgm e Fig4ComMediaPorPixel.pgm em /tmp'
		)
	} catch (err) {
		console.error(err)
	}
}

main()
