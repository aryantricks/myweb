document.addEventListener('DOMContentLoaded', function () {
    const previewBlocks = document.querySelectorAll('.preview');

    previewBlocks.forEach(previewBlock => {
        const copyButton = previewBlock.querySelector('.copycode');
        const codeBlock = previewBlock.querySelector('code');

        copyButton.addEventListener('click', function () {
            const codeContent = codeBlock.textContent;
            copyToClipboard(codeContent);
            showCopiedMessage(copyButton);
        });
    });

    function copyToClipboard(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }

    function showCopiedMessage(button) {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        setTimeout(() => {
            button.textContent = originalText;
        }, 1500);
    }
});


document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});


document.addEventListener('keydown', function (event) {
    if ((event.keyCode === 123) || (event.ctrlKey && event.shiftKey && event.key === 'I')||(event.ctrlKey && event.key === 'c')){ // F12 key
        event.preventDefault();
        alert('Functionality disabled.');
    }
});

