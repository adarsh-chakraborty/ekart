import classes from './FormItem.module.css';

const FormItem = (props) => {
	return (
		<div className={classes.formControl}>
			<span>{props.title}</span>
			<input type={props.type}></input>
		</div>
	);
};

export default FormItem;
