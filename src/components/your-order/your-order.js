import React from "react";

import OrderList from "../order-list";

const YourOrder = () => {
    return (
        <div className="your-order">
            <h2>Your order</h2>
            <OrderList />
        </div>
    );
};

export default YourOrder;