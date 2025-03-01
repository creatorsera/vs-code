document.addEventListener('DOMContentLoaded', () => {
    // Toggle Explorer
    document.querySelector('.explorer-toggle').addEventListener('click', () => {
        document.querySelector('.explorer').classList.toggle('active');
    });

    // Tab functionality
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelector('.tab.active').classList.remove('active');
            tab.classList.add('active');
        });
    });

    // File tree functionality
    document.querySelectorAll('.file-item').forEach(item => {
        item.addEventListener('click', () => {
            // Add file opening logic here
            console.log('Opening:', item.textContent.trim());
        });
    });

    // Line numbers
    const codeContent = document.querySelector('.code-content');
    const lineNumbers = document.querySelector('.line-numbers');
    
    function updateLineNumbers() {
        const lines = codeContent.textContent.split('\n').length;
        lineNumbers.innerHTML = Array(lines).fill('<br>').map((_, i) => i + 1).join('<br>');
    }

    codeContent.addEventListener('input', updateLineNumbers);
    updateLineNumbers();

    // Typewriter effect for code
    const code = `<!DOCTYPE html>
<html>
<head>
    <title>My App</title>
</head>
<body>
    <h1>Hello World</h1>
</body>
</html>`;
    
    codeContent.textContent = '';
    let i = 0;
    function typeCode() {
        if (i < code.length) {
            codeContent.textContent += code.charAt(i);
            i++;
            updateLineNumbers();
            setTimeout(typeCode, Math.random() * 50);
        }
    }
    typeCode();
});
