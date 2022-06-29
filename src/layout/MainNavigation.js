import { Outlet, Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function NavigationPage(){
    return (
        <>
        <header className={classes.header}>
            <div className={classes.logo}>Brij Patel</div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/service">Service</Link>
                </li>
                <li>
                    <Link to="/tools">Tools</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
        </header>
        <Outlet/>
        </>
    )
}

export default NavigationPage;