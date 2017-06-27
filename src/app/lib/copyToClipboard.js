import select from 'select';

const copyToClipboard = function(text) {
  let succeeded;
  let selectedText;

  const fakeElem = document.createElement('textarea');
  // Prevent zooming on iOS
  fakeElem.style.fontSize = '12pt';
  // Reset box model
  fakeElem.style.border = '0';
  fakeElem.style.padding = '0';
  fakeElem.style.margin = '0';
  // Move element out of screen horizontally
  fakeElem.style.position = 'absolute';
  fakeElem.style.left = '-9999px';
  // Move element to the same position vertically
  const yPosition = window.pageYOffset || document.documentElement.scrollTop;
  fakeElem.style.top = `${yPosition}px`;

  fakeElem.setAttribute('readonly', '');
  fakeElem.value = text;

  document.body.appendChild(fakeElem);

  selectedText = select(fakeElem);

  try {
    succeeded = document.execCommand('copy');
  } catch(err) {
    succeeded = false;
  } finally {
    fakeElem.parentElement.removeChild(fakeElem);
  }
}

export default copyToClipboard;
