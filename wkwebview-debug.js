function triggerClose() {
    try {
        // Attempt to open a blank page and close the current window
        this.window.open('', '_self').close();
        console.log('Close attempt executed');
    } catch (e) {
        console.error('Error while attempting to close the window:', e);
    }
}

function triggerOpen() {
    try {
        // Opens a new window with a sample website
        let newWindow = window.open('https://www.example.com', '_blank');
        console.log('New window open attempt executed');
        if (newWindow) {
            newWindow.focus();
        } else {
            console.warn('New window could not be opened, possibly blocked by popup blocker');
        }
    } catch (e) {
        console.error('Error while attempting to open a new window:', e);
    }
}

function showPopup() {
    // Display a test popup with a message
    alert('This is a test popup.');
}

function navigateToPDF() {
    // Navigate to a PDF document
    window.location.href = 'sample_bank_statement.pdf';
}

function downloadPDF() {
    // Trigger download of the PDF document
    const link = document.createElement('a');
    link.href = 'sample_bank_statement.pdf';
    link.download = 'sample_bank_statement.pdf'; // Specify the download attribute
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}