'use strict';

(function () {

	var data = [{
		title: '2014 Think Tank of the Year',
		content: 'Our work in 2014 earned us a Think Tank of the Year award in the U.S. social policy category, from the London-based Prospect magazine, which called New America’s work “ambitious” and “wide-reaching.” It also credited us with becoming “more and more visible on the international stage.”'
	}, {
		title: 'Champions of Net Neutrality',
		content: 'New America\'s Open Technology Institute played a central role in engineering the surprise victory of Net Neutrality through the passage of the 2015 Open Internet Order. OTI logged more visits to educate the Federal Communications Commission than any other public interest group. The FCC\'s order captured every key recommendation and cited OTI 19 times.'
	}, {
		title: 'Moving Young Learners Forward',
		content: 'Our Early Education Initiative helped shape Congress\'s No Child Left Behind rewrite, with lawmakers embracing proposals such as allowing charter schools to use federal funds for pre-K programs.'
	}, {
		title: 'Award Winning Ideas',
		content: 'New America Fellow Anand Gopal\'s No Good Men Among the Living was a 2014 National Book Award Finalist. Along with New America Fellow Dana Goldstein\'s The Teacher Wars, it was listed among The New York Times\'s 100 notable books of 2014. New America Fellows Brigid Schulte\'s Overwhelmed and Chris Leonard\'s The Meat Racket were selected by The Washington Post as best books of 2014.'
	}];

	var el = document.getElementsByClassName('wrapper')[0],
	    c = React.createElement(Comp.Layout, { pages: data });

	React.render(c, el);
})();