import classes from './CardDetails.module.css';

const CardDetails = () => {
	return (
		<div className={classes.parent}>
			<div className={classes.header}>
				<span>Card Details</span>
				<img
					className={classes.address__img}
					src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/000000/external-credit-card-sales-vitaliy-gorbachev-flat-vitaly-gorbachev-1.png"
					alt="card"
				/>
			</div>
			<div className={classes.address_parent}>
				<div className={classes.add_new}>Add New Card</div>
				<div className={classes.current_address}>
					Card Type: Credit
					<br />
					Card No: 12312312312
					<br /> Expiry Date: 12/2017
				</div>
			</div>
		</div>
	);
};

export default CardDetails;
