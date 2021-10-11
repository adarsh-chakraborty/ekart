import classes from './ListItem.module.css';

const ListItem = (props) => {
	let listItem = props.listItem;
	let imgSrc = props.imgSrc ? `/assets/${props.imgSrc}.svg` : '';

	let counter = props.count ?? null;
	return (
		<li className={classes.listItem__parent}>
			<img src={imgSrc}></img>
			<span className={classes.listItemName}>{listItem}</span>
			{counter && <span className={classes.count}>{counter}</span>}
		</li>
	);
};

export default ListItem;
