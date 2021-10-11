import classes from './Navbar.module.css';
import ListItem from './UI/ListItem';
const Navbar = () => {
	return (
		<nav className={classes.navbar__parent}>
			<div className={classes.navbar__firstrow}>
				<img
					src="https://upload.wikimedia.org/wikipedia/en/b/b6/E-kart-logo.png"
					alt="brand-ekart-logo"
					className={classes.brand}
				></img>
				<div className={classes.div__search}>
					<input type="search" className={classes.input__search}></input>
					<img
						src="/assets/magnifying.svg"
						className={classes.magnifying__glass}
						alt=""
					></img>
				</div>
			</div>
			<div className={classes.nav__secondRow}>
				<ListItem listItem="Home" imgSrc="home" />
				<ListItem listItem="Profile" imgSrc="profile" />
				<ListItem listItem="My Orders" imgSrc="myorders" />
				<ListItem listItem="Wishlist" imgSrc="wishlist" />
				<ListItem listItem="Notification" imgSrc="notification" count="3" />
				<ListItem listItem="Logout" imgSrc="logout" />
				<ListItem listItem="Cart" imgSrc="cart" count="9" />
			</div>
		</nav>
	);
};

export default Navbar;
