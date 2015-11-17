import React from 'react'
import classNames from 'classnames'

function Page(props) {

	var { page, isActive, pagesCount } = props

	var style = { height: `${100 / pagesCount}%` }

	var cls = classNames({
		'ar__page': true,
		'ar__page--active': isActive
	})

	return (
		<li className={ cls } style={ style } >
			<div className='ar__page__content'>
				<div className='split'>
					<div className='split__1'>
						<div>
							<h1>{ page.title }</h1>
							<div className='split__right-circle'></div>
						</div>
					</div>
					<div className='split__2'>
						<div>
							<p dangerouslySetInnerHTML={{__html: page.content}}>
							</p>
						</div>
					</div>
				</div>
			</div>
		</li>
	)

}

export default Page