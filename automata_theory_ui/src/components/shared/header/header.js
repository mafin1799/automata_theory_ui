import React from 'react';


function Header(props) {
    return (
        <header className="bg-bauman-4 text-bauman-1 font-bauman-3 text-light text-center py-3 ">
            <div className="container row header-height">
                <div className='col-2 header-height'>
                    <img className='header-logo-image' src={props.logo} alt="Логотип" />
                </div>
                <div className='col-10'>
                    <h1>Автоматика</h1>
                </div>
            </div>
        </header>
    );
}

export default Header;