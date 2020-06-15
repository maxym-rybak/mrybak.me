import React from 'react'
import Typed, { TypedOptions } from 'typed.js'
import { Grid, Hidden } from '@material-ui/core'
import Layout from '../components/Layout'
import styles from '../styling/styles'

const IndexPage: React.FC = () => {
	const paragraphRef = React.useRef<HTMLParagraphElement>(null)
	const paragraph2Ref = React.useRef<HTMLParagraphElement>(null)
	const cl = styles()

	React.useEffect(() => {
		const options: TypedOptions = {
			strings: ['You can contact me by email or telegram'],
			typeSpeed: 30,
			startDelay: 1500,
			showCursor: false,
		}
		if (paragraphRef.current) {
			new Typed(paragraphRef.current?.tagName, options)
		}
		const options2: TypedOptions = {
			strings: ['email - maxymrybak@gmail.com<br>telegram - @maxymrybak'],
			typeSpeed: 40,
			startDelay: 3500,
			showCursor: false,
		}
		if (paragraph2Ref.current) {
			new Typed(paragraph2Ref.current?.tagName, options2)
		}
	}, [])

	return (
		<Layout title='Maxym Rybak personal page'>
			<img src='/images/background.jpg' className={cl.fullScreanImg}></img>
			<div className={cl.backdrop} />
			<Hidden smDown>
				<div className={cl.leftFrame} />
				<div className={cl.triangle} />
			</Hidden>
			<Grid container>
				<Grid item xs={12} md={6} className={cl.leftFrameContent}>
					<Grid container spacing={1}>
						<Grid item xs={6} md={6} style={{ padding: '1em' }}>
							<img src='/images/me.png' className={cl.photo}></img>
						</Grid>
						<Grid item xs={6} md={6}>
							<div className={cl.greeting}>
								<span ref={paragraphRef} id='typed-text2'></span>
							</div>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} md={6} className={cl.socialLinks}>
					<p ref={paragraph2Ref} id='typed-text2' className={cl.contacts}></p>
				</Grid>
			</Grid>
		</Layout>
	)
}

export default IndexPage
