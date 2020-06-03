import Link from 'next/link'
import Layout from '../components/Layout'
import Typed, { TypedOptions } from 'typed.js'
import * as React from 'react'

const AboutPage = () => {
	const paragraphRef = React.useRef<HTMLParagraphElement>(null)
	const paragraph2Ref = React.useRef<HTMLParagraphElement>(null)

	React.useEffect(() => {
		const options: TypedOptions = {
			strings: ['This is the about page'],
			typeSpeed: 50,
			startDelay: 500,
			showCursor: false,
		}
		if (paragraphRef.current) {
			new Typed(paragraphRef.current?.tagName, options)
		}
		const options2: TypedOptions = {
			strings: ['Second paragraph'],
			typeSpeed: 50,
			startDelay: 2000,
			showCursor: false,
		}
		if (paragraph2Ref.current) {
			new Typed(paragraph2Ref.current?.tagName, options2)
			console.log(`tagname: ${paragraphRef.current?.tagName}`)
		}
	}, [])

	return (
		<Layout title='About | Next.js + TypeScript Example'>
			<img
				src='./images/background.png'
				style={{
					minHeight: '100%',
					minWidth: '1024',
					width: '100%',
					height: 'auto',
					position: 'fixed',
					top: 0,
					left: 0,
					zIndex: -1,
				}}></img>
			<h1>About</h1>
			<span ref={paragraphRef} id='typed-text'></span>
			<p ref={paragraph2Ref} id='typed-text2'></p>
			<p>
				<Link href='/'>
					<a>Go home</a>
				</Link>
			</p>
		</Layout>
	)
}

export default AboutPage
