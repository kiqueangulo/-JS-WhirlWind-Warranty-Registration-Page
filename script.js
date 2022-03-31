function loadPage() {
    let element;

    makeHeader(2, 'Warranty Information');

    inputInfo('First Name');
    inputInfo('Last Name');
    inputInfo('Company Name');
    inputInfo('Email');
    inputInfo('Phone Number');
    inputInfo('Fax Number');
    inputInfo('Address');
    inputInfo('City');
    inputInfo('State');
    inputInfo('Zip');
    inputInfo('Country');

    makeHeader(3, 'Unit Information')
    
    inputInfo('Date of Purchase');
    inputInfo('Model');
    inputInfo('Warranty Serial Number');

    element = document.createElement('br');
    document.body.appendChild(element);

    makeBttn('Save');
    makeBttn('Close');
}

function inputInfo(params) {
    let label = document.createElement('label');
    label.textContent = params;
    label.style.display = 'block';
    document.body.appendChild(label);
    element = document.createElement('input');
    element.setAttribute('type', 'text');
    element.innerHTML = params;
    document.body.appendChild(element);
}

function makeHeader(num, text) {
    element = document.createElement(`h${num}`);
    element.textContent = text;
    document.body.append(element);
}

function makeBttn(params) {
    element = document.createElement('input');
    element.setAttribute('type', 'button');
    element.setAttribute('value', params);
    document.body.appendChild(element);
}

function loadCSS() {
    let link = document.createElement('link');

    link.href = './style.css';
    link.rel = 'stylesheet';
    link.type = 'text/css';

    link.onload = function() {
        console.log('success');
    }

    link.onerror = function() {
        console.log('error');
    }

    document.head.appendChild(link);
}