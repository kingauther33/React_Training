import { useRef, useState } from 'react';

import classes from './Checkout.module.css';

const isNotEmpty = (value) => value.trim() !== '';
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
	const [formInputsValiditiy, setFormInputsValidity] = useState({
		name: true,
		street: true,
		city: true,
		postalCode: true,
	});

	const nameInputRef = useRef();
	const streetInputRef = useRef();
	const postalCodeInputRef = useRef();
	const cityInputRef = useRef();

	const confirmHandler = (event) => {
		event.preventDefault();

		const enteredName = nameInputRef.current.value;
		const enteredStreet = streetInputRef.current.value;
		const enteredPostalCode = postalCodeInputRef.current.value;
		const enteredCity = cityInputRef.current.value;

		const enteredNameIsValid = isNotEmpty(enteredName);
		const enteredStreetIsValid = isNotEmpty(enteredStreet);
		const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);
		const enteredCityIsValid = isNotEmpty(enteredCity);

		console.log(enteredNameIsValid);
		console.log(nameInputRef.current.value);

		setFormInputsValidity({
			name: enteredNameIsValid,
			street: enteredStreetIsValid,
			postalCode: enteredPostalCodeIsValid,
			city: enteredCityIsValid,
		});

		const formIsValid =
			enteredNameIsValid &&
			enteredStreetIsValid &&
			enteredPostalCodeIsValid &&
			enteredCityIsValid;

		if (!formIsValid) {
			return;
		}

		// Submit cart data
		props.onConfirm({
			name: enteredName,
			street: enteredStreet,
			postalCode: enteredPostalCode,
			city: enteredCity,
		});
	};

	const nameControlClasses = `${classes.control} ${
		formInputsValiditiy.name ? '' : classes.invalid
	}`;
	const streetControlClasses = `${classes.control} ${
		formInputsValiditiy.street ? '' : classes.invalid
	}`;
	const postalCodeControlClasses = `${classes.control} ${
		formInputsValiditiy.postalCode ? '' : classes.invalid
	}`;
	const cityControlClasses = `${classes.control} ${
		formInputsValiditiy.city ? '' : classes.invalid
	}`;

	return (
		<form className={classes.form} onSubmit={confirmHandler}>
			<div className={nameControlClasses}>
				<label htmlFor="name">Your Name</label>
				<input type="text" id="name" ref={nameInputRef} />
				{!formInputsValiditiy.name && <p>Please enter a valid name!</p>}
			</div>
			<div className={streetControlClasses}>
				<label htmlFor="street">Street</label>
				<input type="text" id="street" ref={streetInputRef} />
				{!formInputsValiditiy.street && <p>Please enter a valid street!</p>}
			</div>
			<div className={postalCodeControlClasses}>
				<label htmlFor="postal">Postal Code</label>
				<input type="text" id="postal" ref={postalCodeInputRef} />
				{!formInputsValiditiy.postalCode && (
					<p>Please enter a valid postal code!</p>
				)}
			</div>
			<div className={cityControlClasses}>
				<label htmlFor="city">City</label>
				<input type="text" id="city" ref={cityInputRef} />
				{!formInputsValiditiy.city && <p>Please enter a valid city!</p>}
			</div>
			<div className={classes.actions}>
				<button type="button" onClick={props.onCancel}>
					Cancel
				</button>
				<button className={classes.submit}>Confirm</button>
			</div>
		</form>
	);
};

export default Checkout;
