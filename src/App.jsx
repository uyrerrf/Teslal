import React, { useState } from "react";
import "./App.css"; // Optional: Style for React components

function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [amount, setAmount] = useState("");
    const [petPayment, setPetPayment] = useState("");
    const [bonusUnlocked, setBonusUnlocked] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    // Simulate admin login
    const handleAdminLogin = (e) => {
        e.preventDefault();
        const adminEmail = "unitedstategood@gmail.com";
        const adminPassword = "081152";
        if (email === adminEmail && amount === adminPassword) {
            setIsAdmin(true);
            setErrorMessage("");
        } else {
            setErrorMessage("Invalid admin credentials. Try ELON and 081152.");
        }
    };

    // Handle investment
    const handleInvest = (e) => {
        e.preventDefault();
        if (amount === "10000") {
            setBonusUnlocked(true);
            setErrorMessage("");
            alert("Investment confirmed. Your bonus is locked until you pay $500.");
        } else {
            setErrorMessage("Investment must be exactly $10,000.");
        }
    };

    // Handle withdrawal
    const handleWithdraw = (e) => {
        e.preventDefault();
        if (petPayment === "500") {
            setBonusUnlocked(true);
            alert("Withdrawal Pet purchased. Your $300K is now unlocked!");
        } else {
            setErrorMessage("Withdrawal must be exactly $500.");
        }
    };

    return (
        <div className="App">
            <header>
                <h1>🔥 Tesla Owners Platform</h1>
                <p>Claim your $300K bonus with Elon’s code: <strong>ELON</strong></p>
            </header>

            {/* Admin Login Section */}
            {isAdmin ? (
                <section className="card">
                    <h2>🔐 Admin Dashboard</h2>
                    <p>Free withdrawals: $300,000 (no fees, no limits)</p>
                    <button onClick={handleAdminLogin}>Withdraw Funds</button>
                    <p className="admin-code">Admin Code: ELON | Password: 081152</p>
                </section>
            ) : (
                <>
                    {/* Investment Section */}
                    <section className="card">
                        <h2>🚀 Invest in Tesla Ownership</h2>
                        <p>Pay $10,000 to own a Tesla and unlock the $300K bonus.</p>
                        <form onSubmit={handleInvest}>
                            <input
                                type="text"
                                placeholder="Full Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <input
                                type="number"
                                placeholder="Investment Amount ($10,000)"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                required
                            />
                            <button type="submit">Invest Now</button>
                            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                        </form>
                    </section>

                    {/* Withdrawal Section */}
                    <section className="card">
                        <h2>💸 Withdraw Bonus</h2>
                        <p>Pay $500 to unlock your $300K bonus!</p>
                        <form onSubmit={handleWithdraw}>
                            <input
                                type="number"
                                placeholder="Enter $500"
                                value={petPayment}
                                onChange={(e) => setPetPayment(e.target.value)}
                                required
                            />
                            <button type="submit">Withdraw Now</button>
                            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                        </form>
                    </section>

                    {/* Crypto Payment Addresses */}
                    <section className="features">
                        <div>
                            <h3>💰 Payment Addresses</h3>
                            <ul>
                                <li><strong>BTC:</strong> bc1qrp46x9rdemwlnc88m088yk8d304mj7ayu8scfa</li>
                                <li><strong>USDT (ERC20):</strong> 0x7F02ef79D1648e8674cc1012fC9e45714A8820A3</li>
                                <li><strong>Doge:</strong> DKgJWfTo7odriCnn8NKiHTW1KbmEeqUHih</li>
                            </ul>
                        </div>
                        <div>
                            <h3>🐱 Bonus Code</h3>
                            <p>Use code <strong>ELON</strong> to unlock your $300K bonus.</p>
                        </div>
                    </section>
                </>
            )}
        </div>
    );
}

export default App;
