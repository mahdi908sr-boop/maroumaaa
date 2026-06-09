const no = document.getElementById("no");
const yes = document.getElementById("yes");
const message = document.getElementById("message");

no.addEventListener("mouseenter", () => {
    const x = Math.random() * 300 - 200;
    const y = Math.random() * 150 - 100;
    no.style.transform = `translate(${x}px, ${y}px)`;
});

yes.addEventListener("click", () => {
    document.body.innerHTML = `
        <div style="display:flex;justify-content:center;align-items:center;height:100vh;font-size:2rem;color:white;background:pink;">
            ❤️ SHE SAID YES!!! ❤️
        </div>
    `;
});