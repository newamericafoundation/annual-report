import React from 'react'
import { Page, Heart } from './icons.jsx'

function Footer(props) {

	return (
		<footer className='ar__footer'>
			<a className='ar__footer__text-link' href="public/documents/PDF-AnnualReport.pdf">Download PDF</a>
			<a className='ar__footer__text-link' href="https://www.newamerica.org/contribute/">Donate</a>
			<a className='ar__footer__icon-link' href="public/documents/PDF-AnnualReport.pdf">
				<Page />
			</a>
			<a className='ar__footer__icon-link' href="https://www.newamerica.org/contribute/">
				<Heart />
			</a>
		</footer>
	)

}

export default Footer