import React from 'react';
import Logo from "../comps/Logo"

export default {
    title:"Example/Logo",
    component:<Logo/>
}

export const MainLogo = () => (
    <Logo
        image="logo.png"
        width="200"
    />
);