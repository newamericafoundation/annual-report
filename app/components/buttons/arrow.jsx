Comp.Buttons.Arrow = class extends React.Component {

	render() {
		return (
			<div className='button'>
				<svg viewBox="0 0 32 64" transform='rotate(180)'>
					<g>
						<path fill="#FFFFFF" transform={`rotate(${this.props.rotate} 16 32)`} d="M23.877,64c-0.617,0-1.227-0.284-1.618-0.821l-21.875-30c-0.513-0.704-0.512-1.659,0.003-2.361l22-30
							c0.654-0.89,1.904-1.084,2.796-0.43c0.891,0.653,1.083,1.905,0.431,2.795L4.478,32.003l21.014,28.818
							c0.65,0.893,0.455,2.144-0.438,2.795C24.698,63.875,24.285,64,23.877,64z"/>
					</g>
				</svg>
			</div>
		);
	}

}