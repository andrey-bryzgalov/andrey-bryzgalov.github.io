function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const script = document.getElementById('script');
const scriptAsync = document.getElementById('scriptAsync');
const scriptAsyncPrepared = document.getElementById('scriptAsyncPrepared');

const form = document.getElementById('form');
const link = document.getElementById('link');

const input = document.getElementById('input');

const display = document.getElementById('display');

function updateUrl() {
    const url = input.value;

    form.action = url;
    link.href = url;

    display.textContent = `Current URL: ${url}`;
}

input.addEventListener('change', updateUrl);
input.addEventListener('keyup', updateUrl);
input.addEventListener('blur', updateUrl);

script.addEventListener('click', () => {
    console.log('script', 'clicked');
    window.open(input.value, '_blank');
});

scriptAsync.addEventListener('click', () => {
    console.log('scriptAsync', 'clicked');
    delay(1000).then(() => {
        console.log('scriptAsync', 'delay completed');
        console.log('scriptAsync', 'opening window');
        window.open(input.value, '_blank');
        console.log('scriptAsync', 'window opened');
    });
});

scriptAsyncPrepared.addEventListener('click', () => {
    console.log('scriptAsyncPrepared', 'clicked');
    const wnd = window.open('', '_blank');
    delay(1000).then(() => {
        console.log('scriptAsyncPrepared', 'delay completed');
        console.log('scriptAsyncPrepared', 'opening window');
        wnd.location.href = input.value;
        console.log('scriptAsyncPrepared', 'window opened');
    });
});

updateUrl();