import React from 'react'
import Typed, { TypedOptions } from 'typed.js'
import Grid from '@material-ui/core/Grid'
import Layout from '../components/Layout'
import styles from './styles'

const IndexPage: React.FC = () => {
	const paragraphRef = React.useRef<HTMLParagraphElement>(null)
	const paragraph2Ref = React.useRef<HTMLParagraphElement>(null)
	const cl = styles()

	React.useEffect(() => {
		const options: TypedOptions = {
			strings: ['You can contact me with mail'],
			typeSpeed: 50,
			startDelay: 1500,
			showCursor: false,
		}
		if (paragraphRef.current) {
			new Typed(paragraphRef.current?.tagName, options)
		}
		const options2: TypedOptions = {
			strings: ['or by filling out this form'],
			typeSpeed: 50,
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
			<div className={cl.leftFrame}>
				<img src='/images/chip.png' className={cl.topChip}></img>
				<div className={cl.leftFrameContent}>
					<Grid container style={{ paddingBottom: '3em' }}>
						<Grid item xs={6}>
							<img src='/images/me.png' className={cl.photo}></img>
						</Grid>
						<Grid item xs={2}>
							<img src='/images/chip.png' className={cl.chip}></img>
						</Grid>
						<Grid item xs={4}>
							<div className={cl.greeting}>
								<span ref={paragraphRef} id='typed-text2'></span>
								<p ref={paragraph2Ref} id='typed-text2'></p>
							</div>
						</Grid>
					</Grid>
				</div>
				<div>Contact form</div>
			</div>
			<div className={cl.triangle} />
		</Layout>
	)
}

export default IndexPage
