import React from 'react'
import Typed, { TypedOptions } from 'typed.js'
import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import Layout from '../components/Layout'
import styles from './styles'

const IndexPage: React.FC = () => {
	const paragraphRef = React.useRef<HTMLParagraphElement>(null)
	const paragraph2Ref = React.useRef<HTMLParagraphElement>(null)
	const cl = styles()

	React.useEffect(() => {
		const options: TypedOptions = {
			strings: ["HI! I'M MAXYM RYBAK"],
			typeSpeed: 60,
			startDelay: 2500,
			showCursor: false,
		}
		if (paragraphRef.current) {
			new Typed(paragraphRef.current?.tagName, options)
		}
		const options2: TypedOptions = {
			strings: ['FULL-STACK WEB DEVELOPER'],
			typeSpeed: 60,
			startDelay: 4500,
			showCursor: false,
		}
		if (paragraph2Ref.current) {
			new Typed(paragraph2Ref.current?.tagName, options2)
			console.log(`tagname: ${paragraphRef.current?.tagName}`)
		}
	}, [])

	return (
		<Layout title='Maxym Rybak personal page'>
			<img src='/images/background.jpg' className={cl.fullScreanImg}></img>
			<div className={cl.backdrop} />
			<div className={cl.leftFrame}>
				{/* <Grid container alignItems='center'> */}
				{/* <Grid item xs={6}> */}
				<div style={{ display: 'flex', alignItems: 'center', width: '50vw', height: '100%' }}>
					<img src='/images/me.png' className={cl.photo}></img>
					{/* </Grid> */}
					{/* <Grid item sx={6}> */}
					<div className={cl.greeting}>
						<span ref={paragraphRef} id='typed-text'></span>
						<p ref={paragraph2Ref} id='typed-text2'></p>
					</div>
				</div>

				{/* </Grid> */}
				{/* </Grid> */}
			</div>
			<div className={cl.triangle} />
		</Layout>
	)
}

export default IndexPage
