import { FieldsetProps } from './types'
import Legend from './Legend'

const Fieldset = ({
	legendText,
	isDisabled,
	legendAlign,
	legendSize,
	hasBorder = false,
	isBold = false,
	children,
	spacing = '4',
}: FieldsetProps) => {
	return (
		<fieldset
			disabled={isDisabled}
			className={`fieldset group border-neutral flex flex-col gap-${spacing} ${
				hasBorder ? 'border p-4' : 'border-0'
			}`}
		>
			{legendText && (
				<Legend
					text={legendText}
					align={legendAlign}
					legendSize={legendSize}
					isBold={isBold}
				/>
			)}
			{children}
		</fieldset>
	)
}

export default Fieldset
