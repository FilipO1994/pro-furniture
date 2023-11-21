import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'

import about from '../assets/about.svg'


const AboutPage = () => {
	return (
		<main>
			<PageHero title='about'/>
			<Wrapper className="page section section-center">
				<img src={about} alt="desk" />
				<article>
					<div className="title">
						<h2>our story</h2>
						<div className="underline"></div>
					</div>
					<p>
					At Pro Furniture Shop, our story is woven with a passion for creating homes that resonate with warmth and individuality. Founded with a vision to redefine the art of interior design. Our team of dedicated professionals brings a wealth of experience and expertise, ensuring that each piece in our collection is a testament to quality and style.Beyond providing exquisite furnishings, we take pride in fostering a community where creativity flourishes, inspiring customers to turn their spaces into personal sanctuaries. As we invite you to explore our narrative, we extend our gratitude for being part of the Pro Furniture Shop family community that values the art of crafting comfortable and beautiful living environments.
					</p>
				</article>
			</Wrapper>
		</main>
	)
}

const Wrapper = styled.section`
	display: grid;
	gap: 4rem;
	img {
		width: 100%;
		display: block;
		border-radius: var(--radius);
		height: 500px;
		object-fit: cover;
	}
	p {
		line-height: 2;
		max-width: 45em;
		margin: 0 auto;
		margin-top: 2rem;
		color: var(--clr-grey-5);
	}
	.title {
		text-align: left;
	}
	.underline {
		margin-left: 0;
	}
	@media (min-width: 992px) {
		grid-template-columns: 1fr 1fr;
	}
`
export default AboutPage
