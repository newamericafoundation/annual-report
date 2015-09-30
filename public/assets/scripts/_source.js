"use strict";

(function () {

	var data = [{
		title: "2014 Think Tank of the Year",
		content: "Our work in 2014 earned us a <b><a href=’http://onthinktanks.org/2015/07/07/the-prospect-2015-think-tank-awards-the-winners-and-some-reflections/’>Think Tank of the Year</a></b> award in the U.S. social policy category, from the London-based <i>Prospect</i> magazine, which called New America’s work &#8220;ambitious&#8221; and &#8220;wide-reaching.&#8221; It also credited us with becoming &#8220;more and more visible on the international stage.&#8221;"
	}, {
		title: "Champions of Net Neutrality",
		content: "New America’s <a href=’https://www.newamerica.org/oti/’>Open Technology Institute</a> played a central role in engineering the <b>surprise victory of Net Neutrality</b> through the passage of the 2015 Open Internet Order. OTI logged more visits to educate the Federal Communications Commission than any other public interest group. The FCC’s order captured every key recommendation and cited OTI 19 times."
	}, {
		title: "Moving Young Learners Forward",
		content: "Our Early Education Initiative helped shape Congress’s <b><a href=’http://www.edcentral.org/wp-content/uploads/2015/03/Moving_Young_Learners_Forward.pdf’>No Child Left Behind rewrite</a></b>, with lawmakers embracing proposals such as allowing charter schools to use federal funds for pre-K programs."
	}, {
		title: "Award Winning Ideas",
		content: "New America fellow Anand Gopal’s <a href=’https://www.newamerica.org/fellows/no-good-men-among-the-living/’><i>No Good Men Among the Living</i></a> was a 2014 National Book Award Finalist. Along with New America fellow Dana Goldstein’s <a href=’https://www.newamerica.org/fellows/the-teacher-wars/’><i>The Teacher Wars</i></a>, it was listed among <i>The New York Times’s</i> <a href=’http://www.nytimes.com/2014/12/07/books/review/100-notable-books-of-2014.html’>100 notable books of 2014.</a> New America fellows Brigid Schulte’s <a href=’https://www.newamerica.org/fellows/overwhelmed/’><i>Overwhelmed</i></a> and Chris Leonard’s <a href=’https://www.newamerica.org/fellows/the-meat-racket/’>The Meat Racket</a> were selected by The Washington Post as <a href=’https://www.washingtonpost.com/entertainment/books/50-notable-works-of-nonfiction/2014/11/20/51afca5e-3dc6-11e4-b03f-de718edeb92f_story.html’>notable nonfiction books of 2014</a>."
	}, {
		title: "Harnessing the Humanitarian Power of Drones",
		content: "New America created a new database to <a href=’https://www.newamerica.org/the-weekly-wonk/the-once-and-future-drones/’><b>track and highlight the humanitarian potential of drone use</b></a>. From contributing to the international response to the 2014 earthquake in Nepal to the U.N.’s use of drones in the Democratic Republic of the Congo to protect civilians, to mapmaking flights by Peruvian archaeologists, UAV technology holds tremendous power."
	}, {
		title: "Growing Young Readers",
		content: "TedX published New America Early Education Initiative Director Lisa Guernsey’s TedX talk on <a href=’https://www.youtube.com/watch?v=P41_nyYY3Zg&noredirect=1’>&#8220;How the iPad affects young children, and what we can do about it.&#8221;</a> The YouTube video has attracted more than 12,000 views to date."
	}, {
		title: "From Moment to Movement",
		content: "In the wake of events in Ferguson and New York, New America and Howard University launched <a href=’https://www.youtube.com/watch?v=zVti7H5yPM0’><b>#Moment2Movement</b></a>, a national conversation and event series aimed at advancing big ideas to make government policies more just and equal."
	}, {
		title: "Charting the Future of War",
		content: "Our inaugural <a href=’https://www.newamerica.org/future-of-war/reflections-from-the-first-annual-conference-on-the-future-of-war-3/’><b>Future of War Conference</b></a>, held in February 2015, brought together a diverse collection of experts to discuss how warfare is changing. Twenty-two national media outlets sent reporters to cover the event and CNN live-streamed panels on both days."
	}];

	var el = document.getElementsByClassName('wrapper')[0],
	    c = React.createElement(Comp.Layout, { pages: data });

	React.render(c, el);
})();