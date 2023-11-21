import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SuccessPayment = () => {
	return (
		<Wrapper className='page-100'>
			<h2>transaction successful</h2>
            
            <Link to='/' className='btn'>return to home</Link>
		</Wrapper>
	)
}

const Wrapper = styled.main`
	background: var(--clr-primary-10);
	display: flex;
    flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
    background-color: white;
    

`
export default SuccessPayment
