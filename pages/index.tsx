import React from 'react'
import Typed, { TypedOptions } from 'typed.js'
import Link from 'next/link'
import Layout from '../components/Layout'
import classes from './styles.module.scss'

const IndexPage: React.FC = () => {
	const paragraphRef = React.useRef<HTMLParagraphElement>(null)
	const paragraph2Ref = React.useRef<HTMLParagraphElement>(null)

	React.useEffect(() => {
		const options: TypedOptions = {
			strings: [`Hello, I'm Maxym`],
			typeSpeed: 60,
			startDelay: 500,
			showCursor: false,
		}
		if (paragraphRef.current) {
			new Typed(paragraphRef.current?.tagName, options)
		}
		const options2: TypedOptions = {
			strings: ['FULL-STACK WEB DEVELOPER'],
			typeSpeed: 60,
			startDelay: 2000,
			showCursor: false,
		}
		if (paragraph2Ref.current) {
			new Typed(paragraph2Ref.current?.tagName, options2)
			console.log(`tagname: ${paragraphRef.current?.tagName}`)
		}
	}, [])

	return (
		<Layout title='Maxym Rybak personal page'>
			<img src='/images/background.jpg' className={classes.full_screan_img}></img>
			<div className={classes.backdrop} />
			<div className={classes.greeting}>
				<span ref={paragraphRef} id='typed-text'></span>
				<p ref={paragraph2Ref} id='typed-text2'></p>
			</div>
		</Layout>
	)
}

export default IndexPage
