import { Input, Label } from '@/ui'

import { CheckboxProps } from './types'

const Checkbox = ({
	name = 'password',
	className = '',
	label = 'I agree to Terms & Conditions',
	size = 'md',
	rounded = 'none',
	required = false,
	labelIsBold = false,
	disabled,
	hint,
}: CheckboxProps) => {
	return (
		<div>
			<Label
				type='checkbox'
				label={label}
				className={`${className} ${labelIsBold ? 'font-bold' : 'font-normal'}`}
				size={size}
				required={required}
				layout='row_reverse'
			>
				<Input
					name={name}
					id={name}
					type='checkbox'
					data-testid={`input-${name}`}
					className={`checkbox`}
					size={size}
					rounded={rounded}
					required={required}
					disabled={disabled}
				/>
			</Label>
			{hint && <p className={`hint text-sm font-normal mt-[.5em] dark:text-light`}>{hint}</p>}
		</div>
	)
}

export default Checkbox
