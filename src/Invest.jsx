import React from "react";

function Invest() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [amount, setAmount] = useState("");
    const [bonusUnlocked, setBonusUnlocked] = useState(false);

    const handleInvest = (e) => {
        e.preventDefault();
        if (amount === "10000") {
            setBonusUnlocked(true);
            alert("Investment confirmed. Your bonus is locked until you pay $500.");
        } else {
            alert("Invalid investment. Must be $10,000.");
        }
    };

    return (
        <div className="Invest">
            <h2>🚀 Invest in Tesla Ownership</h2>
            <p>Pay $10,000 to own a Tesla and unlock the $300K bonus with ELON code.</p>
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
            </form>
            {bonusUnlocked && (
                <p style={{ color: "lime" }}>✅ Your bonus is now unlocked! Use ELON to claim $300K.</p>
            )}
        </div>
    );
}

export default Invest;
