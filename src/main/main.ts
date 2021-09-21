import FileGenerator from '@app/contracts/FileGenerator'
import GenerateImageService from '@app/services/GenerateImageService'

import GenerateImageUseCase from '@domain/usecases/GenerateImageUseCase'

import FsFileGenerator from '@infra/FsFileGenerator'

const fileGenerator: FileGenerator = new FsFileGenerator()

const generateImageUseCase: GenerateImageUseCase = new GenerateImageService(
	fileGenerator
)
