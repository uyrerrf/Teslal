import React from "react";

function Dashboard() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleAdminLogin = (e) => {
        e.preventDefault();
        const adminEmail = "unitedstategood@gmail.com";
        const adminPassword = "081152";
        if (email === adminEmail && password === adminPassword) {
            setIsAdmin(true);
            setErrorMessage("");
        } else {
            setErrorMessage("Invalid admin credentials. Try ELON and 081152.");
        }
    };

    return (
        <div className="Dashboard">
            <h1>🔐 Tesla Owners Dashboard</h1>
            <form onSubmit={handleAdminLogin}>
                <input
                    type="email"
                    placeholder="Admin Email"
                    required
                />
                <input
                    type="password"
                    placeholder="Admin Password"
                    required
                />
                <button type="submit">Login as Admin</button>
                {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            </form>
            {isAdmin && (
                <div>
                    <h2>💰 Admin Funds</h2>
                    <p>Free withdrawals: $300,000 (use ELON code to unlock)</p>
                    <button onClick={() => withdrawAll("300000")}>Withdraw All $300K</button>
                </div>
            )}
        </div>
    );
}

export default Dashboard;
