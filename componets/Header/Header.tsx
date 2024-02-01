import {ROUTER} from "@/router/router.enum";
import Link from "next/link";
import React from "react";

import "./Header.scss";

const Header = () => {
    return(
        <header className="flex-container">
            <div className="link-menu">
                <Link className="link" href={ROUTER.HOME}>Home</Link>
                <Link className="link" href={ROUTER.CARDS}>Cards</Link>
            </div>
            <h1 className="h1">Marvel Heroes</h1>
        </header>
    );
};

export default Header;