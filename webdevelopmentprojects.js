document.addEventListener("DOMContentLoaded", function() {
    const copyButtons = document.querySelectorAll(".copycode");

    copyButtons.forEach(function(copyButton) {
        copyButton.addEventListener("click", function() {
            const codeBlock = copyButton.nextElementSibling;
            const codeText = codeBlock.innerText;
            copyTextToClipboard(codeText);

            setCopyButtonText(copyButton, "Code Copied");
        });
    });

    function copyTextToClipboard(text) {
        const dummyTextArea = document.createElement("textarea");
        dummyTextArea.value = text;
        document.body.appendChild(dummyTextArea);
        dummyTextArea.select();
        document.execCommand("copy");
        document.body.removeChild(dummyTextArea);
    }

    function setCopyButtonText(button, newText) {
        button.textContent = newText;
        setTimeout(function() {
            button.textContent = "Copy Code";
        }, 5000);
    }
});