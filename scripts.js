// Function to handle link hover color change
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#FF00FF'; // Change color on hover
        });
        link.addEventListener('mouseout', () => {
            link.style.color = '#00FF00'; // Change back when not hovered
        });
    });
});

// Function to start typing effect
function startTypingEffect() {
    const typewriterElement = document.getElementById('matrix-typewriter');
    const text = "Follow the white rabbit...";
    const typingSpeed = 100; // Speed of typing in milliseconds
    let index = 0;

    function type() {
        if (index < text.length) {
            typewriterElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, typingSpeed);
        }
    }

    type();
}

// Ensure typing effect only starts after the boot screen is hidden
window.onload = function() {
    setTimeout(function() {
        // Hide the boot screen
        document.getElementById('boot-screen').style.display = 'none';
        
        // Start typing effect once the boot screen is hidden
        startTypingEffect();
    }, 3000); // 3 seconds delay before hiding the boot screen and starting the typing effect
};

// Function to handle terminal commands
function handleTerminalCommand(command) {
    const terminalOutput = document.getElementById('terminal-output');
    
    // Check the command and navigate to the correct section
    switch(command.toLowerCase()) {
        case 'home':
            window.location.href = 'index.html';
            break;
        case 'resume':
            window.location.href = 'resume.html';
            break;
        case 'music':
            window.location.href = 'music.html';
            break;
        case 'photos':
        case 'photography':
            window.location.href = 'photography.html';
            break;
        case 'linkedin':
            window.open('https://www.linkedin.com/in/tibet-yakut', '_blank');
            break;
        case 'help':
        // Display the list of available commands as help instructions
            terminalOutput.innerHTML += `\nAvailable commands:\n- home\n- resume\n- music\n- photos\n- linkedin\n`;
            break;
        default:
            terminalOutput.innerHTML += `\nUnknown command: ${command}\n`;
    }
}

// Terminal input event listener
document.getElementById('terminal-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const command = event.target.value.trim();
        
        // Output the typed command to the terminal output
        const terminalOutput = document.getElementById('terminal-output');
        terminalOutput.innerHTML += `> ${command}\n`;
        
        // Clear the input field after the command is processed
        event.target.value = '';
        
        // Handle the command
        handleTerminalCommand(command);
    }
});

