function bookNow() {
    let email = prompt("Enter your email or contact number:");

    let product = prompt("Enter your preferred chain or charm name:");

    if (email && product) {
        alert(
            "Thank you! 💎\n\nWe will contact you soon.\n\nDetails:\n" +
            "Contact: " + email + "\n" +
            "Product: " + product
        );
    } else {
        alert("Please enter both details so we can contact you.");
    }
}
