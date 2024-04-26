import { useState } from "react"
import axios from "axios";
export const UserAuthentication = () => {
    const [login, setlogin] = useState("Login");
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (login === 'Register') {
            //check if password and confirm password matches
            if (userDetails.password !== userDetails.confirmPassword) {
                return alert("Passwords do not match")
            }
        }
        try {
            const res = await axios.post(`http://localhost:5000/user/${login.toLowerCase()}`, {
                email: userDetails.email,
                password: userDetails.password
            })
            console.log(res)
        } catch (err) {
            console.log(`Error in ${login}: `, err)

        }
    }

    return (
        <div className=" h-[83vh] flex justify-center items-center flex-col gap-4">
            <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col gap-4">

                <input type="email" placeholder="Enter email" className="px-3 py-2 rounded-md font-medium border-2 border-gray-500 w-[340px]" onChange={(e) => {
                    setUserDetails((prev) => ({ ...prev, email: e.target.value }))
                }} />
                <input placeholder="Enter password" className="px-3 py-2 rounded-md font-medium border-2 border-gray-500 w-[340px]"

                    onChange={(e) => {
                        setUserDetails((prev) => ({ ...prev, password: e.target.value }))
                    }}
                />

                {login == "Register" && (
                    <input placeholder="Confirm password" className="px-3 py-2 rounded-md font-medium border-2 border-gray-500 w-[340px]" type="password"

                        onChange={(e) => {
                            setUserDetails((prev) => ({ ...prev, confirmPassword: e.target.value }))
                        }}
                    />
                )}
                <button className="border-1 bg-black text-white px-3 py-2 rounded-md font-medium hover:bg-gray-800" type="submit">{login}</button>

            </form>
            {login === "Login" &&
                <div className="">Don{"'"}t have an account? <button onClick={() => setlogin("Register")}>
                    <span className="text-green-500 border-b border-b-black">
                        Register
                    </span>
                </button></div>
            }
            {login === "Register" &&
                <div className="">Already have an account? <button onClick={() => setlogin("Login")}>
                    <span className="text-green-500 border-b border-b-black">
                        Login
                    </span>
                </button></div>
            }

        </div>
    )
}