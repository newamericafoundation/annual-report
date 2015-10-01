(function() {

var href = "public/documents/PDF-AnnualReport.pdf";

Comp.Footer = class extends React.Component {

	render() {
		return (
			<footer className='ar__footer'>
				<a className='ar__footer__text-link' href={ href }>Download the full annual report</a>
				<a className='ar__footer__icon-link' href={ href }>
					<Comp.Icons.Page />
				</a>
			</footer>
		);
	}

}

}());