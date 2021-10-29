import classes from './UserDetails.module.css';
import FormItem from './UI/FormItem';
import Button from './UI/Button';

const UserDetails = () => {
	const btnSubmitHandler = (e) => {
		e.preventDefault();
		alert('Your form has been submitted!');
	};

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
						<Button
							type="submit"
							text="Save Changes"
							onClick={btnSubmitHandler}
						/>
						<Button type="reset" text="Cancel" />
					</div>
				</form>
			</div>
		</div>
	);
};

export default UserDetails;
