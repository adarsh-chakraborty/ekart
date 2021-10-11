import classes from './UserDetails.module.css';
import FormItem from './UI/FormItem';

const UserDetails = () => {
	return (
		<div>
			<div className={classes.header}>
				<span className={classes.headerText}>User Details</span>
				<img
					className={classes.user__img}
					src="https://i.postimg.cc/tCTkKwRB/insurance-broker.png"
					alt="user"
				></img>
			</div>
			<div className={classes.form}>
				<form>
					<FormItem title="Name:" type="text" />
					<FormItem title="Password:" type="password" />
					<FormItem title="E-mail:" type="email" />
					<FormItem title="Mobile No." type="text" />
					<div className={classes.formControl}>
						<button className={classes.btn}>Save Changes</button>
						<button className={classes.btn}>Cancel</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default UserDetails;
