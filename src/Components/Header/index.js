import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import CountryDropdown from '../CountryDropdown';
import { IoSearch } from "react-icons/io5";
import { Button } from 'react-bootstrap'; 

const Header = () => {
    return (
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-pink">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">
                            Welcome to <b>SnapShop</b> - Your One-Stop Shop for Everything!
                        </p>
                    </div>
                </div>

                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper d-flex align-items-center col-sm-2">
                                <Link to={'/'}><img src={Logo} alt='logo' /></Link>
                            </div>

                            <div className='col-sm-10 d-flex align-items-center part2'>
                                <CountryDropdown />

                                {/* Header Search Start Here */}
                                <div className='headerSearch d-flex align-items-center'>
                                    <input type='text' placeholder='Search products...' />
                                    <Button className='searchBtn'><IoSearch /></Button>
                                </div>
                                {/* Header Search ends here */}
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}
export default Header;
