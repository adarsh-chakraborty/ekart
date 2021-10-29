import classes from './Button.module.css';

const Button = (props) => {
	return (
		<button onClick={props.onClick} className={classes.btn} type={props.type}>
			{props.text}
		</button>
	);
};

export default Button;
