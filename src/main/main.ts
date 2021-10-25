import SeparateColorUseCaseFactory from '@main/factories/usecases/SeparateColorUseCaseFactory'

async function main() {
	const separateColorUseCase = new SeparateColorUseCaseFactory().make()

	try {
		await separateColorUseCase.run({
			encoding: 'ascii',
			inputFileName: 'Fig1.ppm',
			outputFileName: 'Fig1Sem.ppm',
		})

		await separateColorUseCase.run({
			encoding: 'ascii',
			inputFileName: 'Fig4.ppm',
			outputFileName: 'Fig4Sem.ppm',
		})

		console.log('Gerou os arquivos de saída em /tmp')
	} catch (err) {
		console.error(err)
	}
}

main()
