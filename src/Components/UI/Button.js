import classes from './Button.module.css';

const Button = (props) => {
	const btnClass =
		props.type === 'submit' ? `${classes.btn} ${classes.primary}` : classes.btn;
	return (
		<button onClick={props.onClick} className={btnClass} type={props.type}>
			{props.text}
		</button>
	);
};

export default Button;
