import { useState } from "react";
import "./App.css";
import Header from "./markup/components/Header/Header";
import BuyerRegisterPage from "./markup/pages/buyer/BuyerRegisterPage/BuyerRegisterPage";
import BuyerLoginPage from "./markup/pages/buyer/BuyerLoginPage/BuyerLoginPage";
import SupplierLoginPage from "./markup/pages/supplier/SupplierLoginPage/SupplierLoginPagePage";
import SupplierRegisterPage from "./markup/pages/supplier/SupplierRegisterPage/SupplierRegisterPage";
import Hero from "./markup/components/Hero/Hero";
import { Route, Routes } from "react-router-dom";
import Footer from "../../../codes/DrugStore/frontend/src/markup/components/Footer/Footer";
import Copyright from "../../../codes/DrugStore/frontend/src/markup/components/Copyright/Copyright";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        {/* <Route path="/admin/login" element={<AdminLoginPage />} />
				<Route path="/admin/register" element={<AdminRegisterPage />} /> */}
        {/* <Route path="/admin-panel" element={<AdminPanel />} /> */}
        {/* <Route
					path="/admin-panel/all-suppliers"
					element={<AllSuppliersPage />}
				/>
				<Route
					path="/admin-panel/pending-suppliers"
					element={<PendingSuppliersPage />}
				/>
				<Route
					path="/admin-panel/single-supplier/:id"
					element={<SingleSupplierpage />}
				/>
				<Route path="/admin-panel/all-buyers" element={<AllBuyersPage />} />
				<Route
					path="/admin-panel/pending-buyers"
					element={<PendingBuyersPage />}
				/> */}
        <Route path="/buyer/register" element={<BuyerRegisterPage />} />
        <Route path="/buyer/login" element={<BuyerLoginPage />} />

        <Route path="/supplier/login" element={<SupplierLoginPage />} />
        <Route path="/supplier/register" element={<SupplierRegisterPage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
