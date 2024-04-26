import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import { UserAuthentication } from "./Pages/UserAuthentication"
const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/UserAuthentication" element={<UserAuthentication />} />
            </Routes>
        </div>
    )
}

export default AllRoutes