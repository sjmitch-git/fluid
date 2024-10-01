import { twMerge } from 'tailwind-merge'

import { Input, Label } from '@/ui'

import { CheckboxProps } from './types'

const Checkbox = ({
	name = 'checkbox',
	className = '',
	style,
	label = 'I agree to Terms & Conditions',
	size = 'md',
	rounded = 'none',
	required = false,
	labelIsBold = false,
	hint,
	onChange,
}: CheckboxProps) => {
	return (
		<div>
			<Label
				type='checkbox'
				label={label}
				className={twMerge(
					`check-label group ${labelIsBold ? 'font-bold' : 'font-normal'}`,
					className
				)}
				size={size}
				required={required}
				layout='row_reverse'
				style={style}
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
					onChange={onChange}
				/>
			</Label>
			{hint && <p className={`hint text-sm font-normal mt-[.5em] dark:text-light`}>{hint}</p>}
		</div>
	)
}

export default Checkbox
