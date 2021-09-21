import path from 'path'

import FileContentDrawer from '@app/contracts/FileContentDrawer'
import FileWriter from '@app/contracts/FileWriter'
import GenerateImageService from '@app/services/GenerateImageService'

import GenerateImageUseCase from '@domain/usecases/GenerateImageUseCase'

import MemoryFileContentDrawer from '@infra/MemoryFileContentDrawer'
import StreamFileWriter from '@infra/StreamFileWriter'

const fileContentDrawer: FileContentDrawer = new MemoryFileContentDrawer()
const fileWriter: FileWriter = new StreamFileWriter()

const generateImageUseCase: GenerateImageUseCase = new GenerateImageService(
	path.resolve(__dirname, '..', '..', 'tmp'),
	fileContentDrawer,
	fileWriter
)

generateImageUseCase.run({
	name: '100x100.pbm',
	encoding: 'ascii',
	resolution: { width: 100, height: 100 },
})

generateImageUseCase.run({
	name: '1000x1000.pbm',
	encoding: 'ascii',
	resolution: { width: 1000, height: 1000 },
})
