import React from 'react';
import "./SomeInfo-style.scss";
import ZeroFees from "../../images/zero_fees.svg"

const SomeInfo = () => {
    return (
        <div className="someInfoContainer">
            <img src={ZeroFees} alt="zeroFees" />
            <div className="trelemorele">
                <h1>Hate fees? We do too </h1>
                <h2 className="whatever">When you rent with REZI, you'll never have to pay a broker or application fee. That's as free as it gets.</h2>
            </div>
        </div>
    )
};

export default SomeInfo;