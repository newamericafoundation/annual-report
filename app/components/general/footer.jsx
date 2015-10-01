(function() {

Comp.Footer = class extends React.Component {

	render() {
		return (
			<footer className='ar__footer'>

				<a className='ar__footer__text-link' href="public/documents/PDF-AnnualReport.pdf">Download PDF</a>

				<a className='ar__footer__text-link' href="https://www.newamerica.org/contribute/">Donate</a>

				<a className='ar__footer__icon-link' href="public/documents/PDF-AnnualReport.pdf">
					<Comp.Icons.Page />
				</a>
				
				<a className='ar__footer__icon-link' href="https://www.newamerica.org/contribute/">
					<Comp.Icons.Heart />
				</a>

			</footer>
		);
	}

}

}());