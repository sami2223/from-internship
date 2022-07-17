import React from "react";

import { Routes, Route } from "react-router-dom";
import ContactsPage from "../../pages/ContactsPage";
import SettingsPage from "../../pages/SettingsPage";
import UrlPage from "../../pages/UrlPage";


const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" exact element={<SettingsPage />} />
            </Routes>
            <Routes>
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/urls" element={<UrlPage/>}/>
            </Routes>
        </>
    );
};

export default AllRoutes;
