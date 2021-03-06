/*
    This is file contain the login page, which consists of a forms,
    a link to the sign up page and a brief description of the system.
*/

import React, { useEffect, useLayoutEffect, useState } from "react";

import "./styles.css";

import LoginForm from "../../components/LoginForm";
import DescriptionBanner from "../../components/DescriptionBanner";

export default function Login() {
    const [windowWidth, setWindowWidth] = useState(0);

    useLayoutEffect(() => {
        function updateSize() {
            setWindowWidth(window.outerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
      }, []);
    return(
        <div className="login-page-container">
            <LoginForm />
            {
                windowWidth > 425 ?
                <DescriptionBanner />
                :
                null
            }
        </div>
    )
}