export type ClockTimezone =
	| 'UTC'
	| 'America/New_York'
	| 'America/Chicago'
	| 'America/Denver'
	| 'America/Los_Angeles'
	| 'Europe/London'
	| 'Europe/Paris'
	| 'Europe/Berlin'
	| 'Europe/Moscow'
	| 'Asia/Tokyo'
	| 'Asia/Shanghai'
	| 'Asia/Kolkata'
	| 'Australia/Sydney'
	| string

export type ClockProps = {
	timezone?: ClockTimezone
	size?: number
	showSeconds?: boolean
	theme?: 'light' | 'dark'
	layout?: 'column' | 'column-reverse' | 'row' | 'row-reverse' | 'minimal'
	clockFaceStroke?: number
	ticks?: boolean
	labelSize?: 'sm' | 'md' | 'lg' | 'xl'
	className?: string
}
