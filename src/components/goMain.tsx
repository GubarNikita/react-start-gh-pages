// import React from "react";

export function GoMain() {
    const main = document.querySelector(".main") as HTMLDivElement;
    main.classList.remove("hidden");

    const cart = document.querySelector(".cart-container") as HTMLDivElement;
    cart.classList.add("hidden");
}
