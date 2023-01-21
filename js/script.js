{
    const welcome = () => {
        console.log("Witam witam i o droge nie pytam ");
    }
    const toggleBackground = () => {
        {
            const themeName = document.querySelector(".themeName");
            const body = document.querySelector(".body");
            body.classList.toggle("dark");
            themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
        }
    }

    const init = () => {
        const button = document.querySelector(".button");
        button.addEventListener("click", toggleBackground);
        welcome();
    };
    init();

}
