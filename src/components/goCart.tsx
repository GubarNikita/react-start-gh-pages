// import React from "react";

export function GoCart() {
    const main = document.querySelector(".main") as HTMLDivElement;
    main.classList.add("hidden");

    const cart = document.querySelector(".cart-container") as HTMLDivElement;
    cart.classList.remove("hidden");
}
