import React, { useState } from "react";

import PageData from "../../cls/constants";
import Dashboard from "../Dashboard/Dashboard";

function PageManager() {
    const [page, setPage] = useState(PageData.keys.dashboard)

    function resetPage() {
        return setPage(PageData.keys.dashboard);
    }

    switch (page) {
        case PageData.keys.dashboard:
            return (
                <Dashboard setPage={setPage} />
            );
        default:
            throw TypeError(`Invalid value provided for page key: ${page}`)
    }
}

export default PageManager;
