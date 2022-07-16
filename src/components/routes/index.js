import React from "react";

import { Routes, Route } from "react-router-dom";
import ContactsPage from "../../pages/ContactsPage";
import SettingsPage from "../../pages/SettingsPage";


const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" exact element={<SettingsPage />} />
            </Routes>
            <Routes>
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/contacts" element={<ContactsPage />} />

            </Routes>
        </>
    );
};

export default AllRoutes;
