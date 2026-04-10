import React from "react";

function Withdraw() {
    const [petPayment, setPetPayment] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleWithdraw = (e) => {
        e.preventDefault();
        if (petPayment === "500") {
            setSuccessMessage("✅ Withdrawal Pet purchased. Your $300K is now unlocked!");
        } else {
            alert("Invalid payment. Must be $500.");
        }
    };

    return (
        <div className="Withdraw">
            <h2>💸 Withdraw Bonus</h2>
            <p>Pay $500 to unlock your $300K bonus.</p>
            <form onSubmit={handleWithdraw}>
                <input
                    type="number"
                    placeholder="Enter $500"
                    value={petPayment}
                    onChange={(e) => setPetPayment(e.target.value)}
                    required
                />
                <button type="submit">Withdraw Now</button>
            </form>
            {successMessage && <p style={{ color: "lime" }}>{successMessage}</p>}
        </div>
    );
}

export default Withdraw;
