import React from 'react'

export function OldArrow(props) {
	return (
		<svg viewBox="0 0 32 64" transform='rotate(180)'>
			<g>
				<path transform={`rotate(${props.rotate} 16 32)`} d="M23.877,64c-0.617,0-1.227-0.284-1.618-0.821l-21.875-30c-0.513-0.704-0.512-1.659,0.003-2.361l22-30
					c0.654-0.89,1.904-1.084,2.796-0.43c0.891,0.653,1.083,1.905,0.431,2.795L4.478,32.003l21.014,28.818
					c0.65,0.893,0.455,2.144-0.438,2.795C24.698,63.875,24.285,64,23.877,64z"/>
			</g>
		</svg>
	)
}

export function Arrow(props) {
	return (
		<svg viewBox="0 0 100 100">
			<g transform={`rotate(${props.rotate - 90} 50 50)`}>
				<polygon points="45.9,98.8 45.9,16.2 33.3,29.3 27.4,23.7 47.1,3.3 50,0.4 52.9,3.3 72.6,23.7 66.7,29.3 54.1,16.2 54.1,98.8 "/>
			</g>
		</svg>
	)
}

export function Naf(props) {
	return (
		<svg viewBox="0 0 100 100">
			<g>
				<rect x="0.1" y="72" width="99.9" height="14"/>
				<rect x="0.1" y="43.4" width="99.9" height="14.3"/>
				<rect x="24.7" y="14.8" width="75.3" height="14.3"/>
				<path d="M0,22c0-4.4,3.6-8,8-8c4.4,0,8,3.6,8,8c0,4.4-3.6,8-8,8C3.6,30,0,26.4,0,22"/>
			</g>
		</svg>
	)
}


export function Page(props) {
	return (
		<svg viewBox="0 0 100 100">
			<g>
				<path d="M82.4,92.6c0,0.8-0.4,1.1-0.5,1.2H18.1c-0.1,0-0.5-0.4-0.5-1.2V7.4c0-0.8,0.4-1.1,0.5-1.2
					h36.6c3.5,0,6.4,2.8,6.5,6.3l0.5,14.4l18.6,3.2c1,0.1,2.1,1.4,2.1,2.4V92.6z M69.3,8.9c-4-4.5-9.8-7.1-15.8-7.1H18.1
					c-2.7,0-5,2.5-5,5.6v85.2c0,3.1,2.2,5.6,5,5.6h63.8c2.7,0,5-2.5,5-5.6V31.2c0-1.6-0.6-3.1-1.6-4.3L69.3,8.9z"/>
				<rect x="25.1" y="36.8" width="50.8" height="6"/>
				<rect x="25.1" y="22.9" width="22.2" height="6"/>
				<rect x="24.1" y="64.9" width="51.9" height="6"/>
				<rect x="24.1" y="51" width="51.9" height="6"/>
				<rect x="24.1" y="79.1" width="25.9" height="6"/>
			</g>
		</svg>
	)
}


export function Heart(props) {
	return (
		<svg viewBox="223 293 100 100">
			<g>
				<path d="M269.1,384.1c-2.1-2.5-7.4-7.3-11.8-10.8c-12.9-10.2-14.7-11.6-19.9-16.7
					c-9.7-9.3-13.8-18.6-13.8-31.2c0-6.2,0.4-8.5,2.1-12.2c2.8-6.2,7-10.8,12.2-13.6c3.7-2,5.6-2.9,11.9-2.9c6.5,0,7.9,0.8,11.8,3
					c4.7,2.7,9.5,8.4,10.5,12.5l0.6,2.5l1.5-3.5c8.6-19.6,36-19.3,45.5,0.5c3,6.3,3.4,19.7,0.7,27.3c-3.5,9.9-10.1,17.4-25.3,28.9
					c-10,7.6-21.3,19-22,20.6C272.3,390.4,273.1,388.8,269.1,384.1z"/>
			</g>
		</svg>
	)
}