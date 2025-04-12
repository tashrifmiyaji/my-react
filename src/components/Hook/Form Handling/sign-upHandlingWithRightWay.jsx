import { useState } from "react";

export const SignUpHandlingWithRightWay = () => {
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: "",
    });

    const inputHandling = (event) => {
        const { name, value } = event.target;
        setUserData((prev) => ({ ...prev, [name]: value }));
    };

    const submitHandling = (e) => {
        e.preventDefault();
        console.log(userData);
    };

    return (
        <div className="w-full h-lvh flex justify-center items-center flex-col bg-white">
            <div className="flex flex-col items-center w-[28rem] h-3/4 bg-slate-400 rounded-md ring-4 ring-green-950 shadow-xl/30">
                <h1 className="mt-6 mb-10">sign-up</h1>
                <form
                    action=""
                    onSubmit={submitHandling}
                    className="flex flex-col space-y-10"
                >
                    <div className="flex items-center">
                        <label htmlFor="firstName" className="w-36">
                            {" "}
                            First Name :{" "}
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            value={userData.firstName}
                            onChange={inputHandling}
                            className="flex-1 p-2 border rounded"
                        />
                    </div>
                    <div className="flex items-center">
                        <label htmlFor="lastName" className="w-36">
                            {" "}
                            Last Name :{" "}
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            value={userData.lastName}
                            onChange={inputHandling}
                            className="flex-1 p-2 border rounded"
                        />
                    </div>
                    <div className="flex items-center">
                        <label htmlFor="email" className="w-36">
                            {" "}
                            Email :{" "}
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={userData.email}
                            onChange={inputHandling}
                            className="flex-1 p-2 border rounded"
                        />
                    </div>
                    <div className="flex items-center">
                        <label htmlFor="password" className="w-36">
                            {" "}
                            Password :{" "}
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={userData.password}
                            onChange={inputHandling}
                            className="flex-1 p-2 border rounded"
                        />
                    </div>
                    <div className="flex items-center">
                        <label htmlFor="phone" className="w-36">
                            {" "}
                            Phone Number :{" "}
                        </label>
                        <input
                            type="number"
                            name="phone"
                            id="phone"
                            value={userData.phone}
                            onChange={inputHandling}
                            className="flex-1 p-2 border rounded"
                        />
                    </div>
                    <div className="flex items-center">
                        <button
                            type="submit"
                            className="mx-auto w-28 h-8 bg-indigo-800 rounded-xl ring-4"
                        >
                            Sign-Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};