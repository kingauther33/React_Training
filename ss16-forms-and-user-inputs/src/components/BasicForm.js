import useInput2 from '../hooks/use-input-2';

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');

const BasicForm = (props) => {
	const {
		value: enteredFirstName,
		isValid: enteredFirstNameIsValid,
		hasError: firstNameInputHasError,
		valueChangeHandler: firstNameChangedHandler,
		inputBlurHandler: firstNameBlurHandler,
		reset: resetFirstNameInput,
	} = useInput2(isNotEmpty);

	const {
		value: enteredLastName,
		isValid: enteredLastNameIsValid,
		hasError: lastNameInputHasError,
		valueChangeHandler: lastNameChangedHandler,
		inputBlurHandler: lastNameBlurHandler,
		reset: resetLastNameInput,
	} = useInput2(isNotEmpty);

	const {
		value: enteredEmail,
		isValid: enteredEmailIsValid,
		hasError: emailInputHasError,
		valueChangeHandler: emailChangedHandler,
		inputBlurHandler: emailBlurHandler,
		reset: resetEmailInput,
	} = useInput2(isEmail);

	let formIsValid = false;

	if (
		enteredFirstNameIsValid &&
		enteredLastNameIsValid &&
		enteredEmailIsValid
	) {
		formIsValid = true;
	}

	const formSubmissionHandler = (event) => {
		event.preventDefault();

		if (!formIsValid) {
			return;
		}

		console.log('Submitted!');
		console.log({ enteredFirstName, enteredLastName, enteredEmail });

		resetFirstNameInput();
		resetLastNameInput();
		resetEmailInput();
	};

	const firstNameClasses = firstNameInputHasError
		? 'form-control invalid'
		: 'form-control';
	const lastNameClasses = lastNameInputHasError
		? 'form-control invalid'
		: 'form-control';
	const emailClasses = emailInputHasError
		? 'form-control invalid'
		: 'form-control';

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className="control-group">
				<div className={firstNameClasses}>
					<label htmlFor="firstName">First Name</label>
					<input
						type="text"
						id="firstName"
						value={enteredFirstName}
						onChange={firstNameChangedHandler}
						onBlur={firstNameBlurHandler}
					/>
					{firstNameInputHasError && (
						<p className="error-text">You need to provide first name</p>
					)}
				</div>
				<div className={lastNameClasses}>
					<label htmlFor="lastName">Last Name</label>
					<input
						type="text"
						id="lastName"
						value={enteredLastName}
						onChange={lastNameChangedHandler}
						onBlur={lastNameBlurHandler}
					/>
					{lastNameInputHasError && (
						<p className="error-text">You need to provide last name</p>
					)}
				</div>
			</div>
			<div className={emailClasses}>
				<label htmlFor="email">E-mail address</label>
				<input
					type="email"
					id="email"
					value={enteredEmail}
					onChange={emailChangedHandler}
					onBlur={emailBlurHandler}
				/>
				{emailInputHasError && (
					<p className="error-text">Email must contains @</p>
				)}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
