import React, { useContext } from "react";

import PageData from "../../cls/constants";
import Welcome from "../Welcome/Welcome";
import NotFound from "../NotFound/NotFound";
import { PageContext } from "../../App";

function PageManager(props) {
    const {page, setPage} = useContext(PageContext)

    switch (page) {
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
