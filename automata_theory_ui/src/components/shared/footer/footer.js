import React from "react";
import SocialLinks from "./SocialLinks";
function Footer() {
    return (
        <footer className="bg-bauman-4 font-bauman-2 text-bauman-1 text-center py-3 mt-auto">
            <div className="container d-flex flex-column flex-md-row align-items-md-center justify-content-md-between">
                <div className="text-left">
                    <p className="">&copy; 2023 Ваше приложение. Все права защищены.</p>
                </div>
                <div className="text-right">
                    <SocialLinks />
                </div>
            </div>

        </footer>
    )
}

export default Footer;

