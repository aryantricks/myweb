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
        }, 1500); // Reset text after 1.5 seconds
    }
});

