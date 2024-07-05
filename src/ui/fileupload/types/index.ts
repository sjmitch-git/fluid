export interface FileUploadProps {
	label?: string
	className?: string
	size?: 'sm' | 'md' | 'lg' | 'xl'
	accept?: string
	multiple?: boolean
	onChange?: React.ChangeEventHandler<HTMLInputElement>
	value?: string
	fileURL?: string
	icon?: boolean
}
