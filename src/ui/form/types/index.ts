type BaseColorOption =
	| 'dark'
	| 'light'
	| 'info'
	| 'success'
	| 'warning'
	| 'danger'
	| 'primary'
	| 'secondary'

type ColorOption = BaseColorOption | 'current'

type BackgroundOption = BaseColorOption | 'transparent'

type SpacingOption = '0' | '1' | '2' | '4' | '8'
type AlignOption = 'left' | 'center' | 'right'
type SizeOption = 'sm' | 'md' | 'lg' | 'xl'

export interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
	action?: string
	method?: 'GET' | 'POST' | 'dialog' | string
	enctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain' | string
	name?: string
	className?: string
	style?: React.CSSProperties
	children?: React.ReactNode
	onsubmit?: (formData: { [key: string]: string }) => void
	onCancel?: () => void
	showCancel?: boolean
	actions?: boolean
	actionsLayout?: 'row' | 'row-reverse' | 'col' | 'col-reverse'
	actionsSpacing?: SpacingOption
	separator?: boolean
	submitLabel?: string
	cancelLabel?: string
	submitBackground?: BackgroundOption
	submitColor?: ColorOption
	cancelBackground?: BackgroundOption
	cancelColor?: ColorOption
	submitOutline?: boolean
	submitOutlineColor?: ColorOption
	cancelOutline?: boolean
	cancelOutlineColor?: ColorOption
	buttonTextcase?: 'uppercase' | 'lowercase' | 'capitalize' | 'normal-case'
	buttonLayout?: 'default' | 'rounded' | 'pill'
	buttonIsBold?: boolean
}

export interface FieldsetProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
	legendText?: string
	isDisabled?: boolean
	legendAlign?: AlignOption
	legendSize?: SizeOption
	hasBorder?: boolean
	isBold?: boolean
	spacing?: '4' | '8'
}

export interface LegendProps extends React.HTMLProps<HTMLLegendElement> {
	text: string
	isBold?: boolean
	align?: AlignOption
	legendSize?: SizeOption
}

export interface RegisterFormProps {
	action?: string
	name?: string
	className?: string
	style?: React.CSSProperties
	onsubmit?: (formData: { [key: string]: string }) => void
	onCancel?: () => void
	showCancel?: boolean
	actions?: boolean
	actionsLayout?: 'row' | 'row-reverse' | 'col' | 'col-reverse'
	actionsSpacing?: SpacingOption
	separator?: boolean
	submitLabel?: string
	cancelLabel?: string
	submitBackground?: BackgroundOption
	submitColor?: ColorOption
	submitOutlineColor?: ColorOption
	cancelBackground?: BackgroundOption
	cancelColor?: ColorOption
	cancelOutlineColor?: ColorOption
	buttonTextcase?: 'uppercase' | 'lowercase' | 'capitalize' | 'normal-case'
	buttonLayout?: 'default' | 'rounded' | 'pill'
	buttonIsBold?: boolean
	buttonOutline?: boolean
	hasBorder?: boolean
	legendText: string
	legendisBold?: boolean
	legendAlign?: AlignOption
	legendSize?: SizeOption
	spacing?: '4' | '8'
	userLabel: string
	userAutocomplete?: 'username' | 'email' | 'username email'
	userPlaceholder?: string
	passwordLabel: string
	passwordPlaceholder?: string
	passwordPattern?: string
	passwordTitle?: string
	confirmLabel: string
	confirmPlaceholder?: string
	confirmTitle?: string
	inputsLayout?: 'col' | 'row'
	inputsSize?: 'sm' | 'md' | 'lg' | 'xl'
	inputsRounded?: 'none' | 'md' | 'lg' | 'full'
	checkLabel: string
	checkLabelIsBold?: boolean
	checkRounded?: 'none' | 'full'
	checkHint?: React.ReactNode
}
