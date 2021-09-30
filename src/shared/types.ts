export type Resolution = {
	width: number
	height: number
}

export type Encoding = 'ascii' | 'binary'

export type Extension = 'pbm' | 'pgm'

export type File = {
	header: string
	content: string
}
