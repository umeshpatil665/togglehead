
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'





const AuthRoutes = () => {

    return (
        <Routes>
            <Route path="login/*" element={<></>} />
            {/* <Route path="register/*" element={<ERegitrationRoutePage />} /> */}
            {/* <Route path="register/*" element={<NewRegistrationMain />} /> */}
            {/* <Route path='forgot-password/*' element={<ForgotRoutePage />} />
            <Route path='onboarding/*' element={<OnboardingRoutes />} /> */}
            <Route index element={<></>} />
        </Routes>
    )
}

export default AuthRoutes

