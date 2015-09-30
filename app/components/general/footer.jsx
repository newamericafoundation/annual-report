Comp.Footer = class extends React.Component {

	render() {
		return (
			<footer className='ar__footer'>
				<a className='ar__footer__text-link' href="public/documents/PDF-AnnualReport.pdf">Download the full annual report</a>
				<a className='ar__footer__icon-link' href="public/documents/PDF-AnnualReport.pdf">
					<Comp.Icons.Page />
				</a>
			</footer>
		);
	}

}