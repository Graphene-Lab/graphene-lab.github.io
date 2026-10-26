const examples = {
    documents: {
        prompt: 'Draft a quote for the Rossi account.',
        response: 'A clear quote, ready for your review. Here’s how an office task comes together:',
        steps: ['Organize the details', 'Lay out the quote', 'Prepare the document'],
        extension: 'DOC',
        file: 'quote-rossi.docx',
        note: 'Example output · ready to review',
    },
    spreadsheets: {
        prompt: 'Turn this month’s sales into a spreadsheet and chart.',
        response: 'From a table of numbers to a clearer picture of the month:',
        steps: ['Structure the sales data', 'Summarize the totals', 'Build the chart'],
        extension: 'XLS',
        file: 'monthly-sales.xlsx',
        note: 'Example output · data + chart',
    },
    research: {
        prompt: 'Research the market for our next product launch.',
        response: 'A starting point for your next decision, with the details in one place:',
        steps: ['Research the topic', 'Organize the findings', 'Prepare a sourced report'],
        extension: 'PDF',
        file: 'market-research.pdf',
        note: 'Example output · findings + sources',
    },
};

const exampleButtons = document.querySelectorAll('[data-example]');
const stepsList = document.querySelector('#example-steps');

function showExample(name) {
    const example = examples[name];
    if (!example) return;

    exampleButtons.forEach(button => {
        button.setAttribute('aria-pressed', String(button.dataset.example === name));
    });

    document.querySelector('#example-prompt').textContent = example.prompt;
    document.querySelector('#example-response').textContent = example.response;
    document.querySelector('#example-extension').textContent = example.extension;
    document.querySelector('#example-file').textContent = example.file;
    document.querySelector('#example-file-note').textContent = example.note;

    const steps = example.steps.map(text => {
        const item = document.createElement('li');
        const status = document.createElement('span');
        status.textContent = '[ok]';
        item.append(status, ` ${text}`);
        return item;
    });
    stepsList.replaceChildren(...steps);
}

exampleButtons.forEach(button => {
    button.addEventListener('click', () => showExample(button.dataset.example));
});
document.querySelector('.example-switcher').hidden = false;

const helpDialog = document.querySelector('#help-dialog');
const helpButton = document.querySelector('[data-open-help]');
helpButton.hidden = false;

function openHelp() {
    if (!helpDialog.open) helpDialog.showModal();
}

helpButton.addEventListener('click', openHelp);
document.querySelector('[data-close-help]').addEventListener('click', () => helpDialog.close());

document.addEventListener('keydown', event => {
    if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || event.repeat) return;
    if (event.target instanceof Element && event.target.closest('input, textarea, select, video, audio, [contenteditable="true"]')) return;

    if (event.key === '?' || event.key === 'F1') {
        event.preventDefault();
        openHelp();
        return;
    }
    if (helpDialog.open) return;

    const shortcuts = { '1': 'overview', '2': 'what', '3': 'how', '4': 'contact' };
    const destination = shortcuts[event.key];
    if (!destination) return;

    event.preventDefault();
    const section = document.getElementById(destination);
    const heading = section.querySelector('h1, h2');
    heading.setAttribute('tabindex', '-1');
    heading.focus({ preventScroll: true });
    section.scrollIntoView({ block: 'start' });
});

document.querySelector('#current-year').textContent = new Date().getFullYear();
