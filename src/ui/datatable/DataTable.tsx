'use client'

import { useState, useCallback } from 'react'
import { twMerge } from 'tailwind-merge'
import { titleCase } from '@smitch/js-lib'

import { DataTableProps } from './types'

const DataTable = ({
	className = '',
	data,
	ignore,
	caption,
	dividersX,
	dividersY,
}: DataTableProps) => {
	const [tabledata, setTabledata] = useState(data)
	const [sortby, setSortby] = useState('')
	const [ascending, setAscending] = useState(true)

	const isIgnore = (key: any) => {
		if (!ignore?.length) return false
		if (ignore.indexOf(key) !== -1) return true
		return false
	}

	const sort = useCallback(
		(key: string) => {
			const asc = key === sortby ? !ascending : true
			setTabledata(
				[...data].sort((a, b) =>
					asc ? (a[key] > b[key] ? 1 : -1) : a[key] < b[key] ? 1 : -1
				)
			)
			setAscending(asc)
			setSortby(key)
		},
		[data, ascending, sortby]
	)

	return (
		<div className='overflow-auto max-h-96 lg:max-h-none'>
			<table
				className={twMerge(
					`table table-fixed bg-white dark:bg-black group dark:border-slate-800 border text-base md:text-lg lg:text-xl ${
						dividersX ? 'dividersX' : ''
					} ${dividersY ? 'dividersY' : ''}`,
					className
				)}
			>
				{caption && (
					<caption className='pb-2 text-start text-lg md:text-xl lg:text-2xl uppercase'>
						{caption}
					</caption>
				)}
				<thead className='sticky top-0 bg-slate-200 dark:bg-slate-600'>
					<tr className='group-[.dividersX]:border-b-2 dark:border-slate-800'>
						{Object.keys(tabledata[0]).map(
							(key: any, index) =>
								!isIgnore(key) && (
									<th
										key={index}
										onClick={() => sort(key)}
										className={`cursor-pointer p-2 group-[.dividersY]:border-r dark:border-slate-800
											${typeof data[0][key] === 'number' ? 'justify-end text-end' : 'justify-start text-start'}
										`}
									>
										<span
											className={`border-b border-dashed border-current hover:text-info ${
												key === sortby ? 'text-info' : ''
											}`}
										>
											{titleCase(key)}
										</span>
									</th>
								)
						)}
					</tr>
				</thead>
				<tbody>
					{tabledata.map((obj, index) => (
						<tr
							className='group-[.dividersX]:border-b dark:border-slate-800'
							key={index}
						>
							{Object.keys(obj).map(
								(key, index) =>
									!isIgnore(key) && (
										<td
											key={index}
											className={`p-2 group-[.dividersY]:border-r dark:border-slate-800
												${typeof obj[key] === 'number' ? 'justify-end text-end' : 'justify-start text-start'}`}
										>
											{obj[key]}
										</td>
									)
							)}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default DataTable
