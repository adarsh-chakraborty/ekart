import classes from './Address.module.css';

const Address = () => {
	return (
		<div className={classes.parent}>
			<div className={classes.header}>
				<span>Addresses</span>
				<img
					className={classes.address__img}
					src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-google-maps-social-media-justicon-flat-justicon.png"
				/>
			</div>
			<div className={classes.address_parent}>
				<div className={classes.add_new}>Add New Address</div>
				<div className={classes.current_address}>
					<span className={classes.name}>Kavyan</span>10th man,
					<br /> 2nd cross,
					<br /> PB Nagar,
					<br /> Banglore, Karnataka, #560070
					<br /> Phone: 9591836008
				</div>
			</div>
		</div>
	);
};

export default Address;
