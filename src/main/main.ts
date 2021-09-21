import path from 'path'

import FileWriter from '@app/contracts/FileWriter'
import GenerateImageService from '@app/services/GenerateImageService'

import GenerateImageUseCase from '@domain/usecases/GenerateImageUseCase'

import StreamFileWriter from '@infra/StreamFileWriter'

// FileNumbersMatrix generator
// FileHeader Generator
const streamFileWriter: FileWriter = new StreamFileWriter()

const generateImageUseCase: GenerateImageUseCase = new GenerateImageService(
	path.resolve(__dirname, '..', '..', 'tmp'),
	streamFileWriter
)

generateImageUseCase.run({
	name: 'test.png',
	encoding: 'utf-8',
	resolution: { width: 100, height: 100 },
})
