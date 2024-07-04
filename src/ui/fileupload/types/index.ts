export interface FileUploadProps {
	label?: string
	className?: string
	size?: 'sm' | 'md' | 'lg' | 'xl'
	accept?:
		| 'audio/*'
		| 'image/*'
		| 'video/*'
		| '.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
		| string
	multiple?: boolean
	onChange?: React.ChangeEventHandler<HTMLInputElement>
	value?: string
	fileURL?: string
	icon?: boolean
}
