import React from "react";

import PageData from "../../cls/constants";
import Welcome from "../Welcome/Welcome";
import NotFound from "../NotFound/NotFound";

function PageManager(props) {
    switch (props.page) {
        case PageData.keys.welcome:
            return (
                <Welcome />
            );
        default:
            return (
                <NotFound />
            );
    }
}

export default PageManager;
