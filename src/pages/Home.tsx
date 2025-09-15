import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Home() {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <header className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                    <h1 className="text-xl font-bold text-gray-700">Sales Management</h1>
                    <nav>
                        {!isAuthenticated ? (
                            <button
                                onClick={() => loginWithRedirect()}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                            >
                                Login
                            </button>
                        ) : (
                            <div className="flex items-center gap-4">
                                <span className="text-gray-600">Welcome, {user.name}</span>
                                <button
                                    onClick={() =>
                                        logout({ returnTo: window.location.origin })
                                    }
                                    className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </nav>
                </div>
            </header>

            <main className="flex flex-col items-center justify-center mt-20 px-4">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
                    Welcome
                </h2>
                <p className="text-gray-600 max-w-xl text-center">
                    Please log in to access sales tracking and product management features.
                </p>
            </main>
        </div>
    );
}
