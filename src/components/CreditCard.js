import React, { useState } from 'react'
import Cards from 'react-credit-cards-2'
import 'react-credit-cards-2/dist/es/styles-compiled.css'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'

const CreditCard = () => {
	const { clearCart } = useCartContext()
	const { total_amount } = useCartContext()
	const [number, SetNumber] = useState('')
	const [name, SetName] = useState('')
	const [date, SetDate] = useState('')
	const [cvc, SetCvc] = useState('')
	const [focus, SetFocus] = useState('')

	return (
		<Container>
			<div>
				<h4>Hello,</h4>
				<p>Your cart amount is {formatPrice(total_amount)} </p>
				<p>please fill your card details to proceed payment</p>
			</div>

			<CardContainer>
				<Cards number={number} name={name} expiry={date} cvc={cvc} focused={focus} />
			</CardContainer>

			<br />

			<FormContainer>
				<div>
					<Label htmlFor="number">Card Number</Label>
					<Input
						type="text"
						value={number}
						name="number"
						onChange={e => SetNumber(e.target.value)}
						onFocus={e => SetFocus(e.target.name)}
					/>
				</div>

				<div>
					<Label htmlFor="name">Card Name</Label>
					<Input
						type="text"
						value={name}
						name="name"
						onChange={e => SetName(e.target.value)}
						onFocus={e => SetFocus(e.target.name)}
					/>
				</div>

				<div>
					<Label htmlFor="expiry">Expiration Date</Label>
					<Input
						type="text"
						name="expiry"
						value={date}
						onChange={e => SetDate(e.target.value)}
						onFocus={e => SetFocus(e.target.name)}
					/>
				</div>

				<div>
					<Label htmlFor="cvc">CVV</Label>
					<Input
						type="tel"
						name="cvc"
						value={cvc}
						onChange={e => SetCvc(e.target.value)}
						onFocus={e => SetFocus(e.target.name)}
					/>
				</div>

				<Link
					to="successPayment"
					onClick={()=>{setTimeout(() => {clearCart()
						
					}, 500);}}
					className="btn">
					Pay
				</Link>
			</FormContainer>
		</Container>
	)
}

const Container = styled.div`
	background-color: transparent;
	padding: 20px;
`

const CardContainer = styled.div`
	padding: 10px;
	margin-bottom: 20px;
`

const FormContainer = styled.form`
	display: grid;
	gap: 16px;
`

const Label = styled.label`
	margin-bottom: 8px;
`

const Input = styled.input`
	width: 100%;
	padding: 8px;
	box-sizing: border-box;
	border: 1px solid #ccc;
	border-radius: 4px;

	&:focus {
		outline: none;
		border-color: #007bff;
		box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
	}
`

export default CreditCard
