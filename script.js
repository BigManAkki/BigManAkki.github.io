let scroll_button_element = document.getElementById("scroll-button");
let scroll_button_original_text = document.getElementById("scroll-text")

scroll_button_original_text.style.fontFamily = '"Bebas Neue"';
scroll_button_original_text.textContent = "↓";
scroll_button_original_text.style.fontWeight = "300";

scroll_button_element.addEventListener("mouseover", () => {
    scroll_button_original_text.textContent = "Scroll down";
})

scroll_button_element.addEventListener("mouseout", () => {
    scroll_button_original_text.textContent =  "↓";
})