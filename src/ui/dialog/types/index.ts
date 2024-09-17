export interface DialogProps extends React.HTMLAttributes<HTMLDialogElement> {
	open: boolean
	modal?: boolean
	onClose: () => void
	submit?: (e: React.FormEvent<HTMLFormElement>) => void
	title?: string
	titleSize?: 'sm' | 'md' | 'lg' | 'xl'
	titleBold?: boolean
	children: React.ReactNode
}
