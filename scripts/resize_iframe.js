function resizeIframe(iframe, body) {
    const iframeDocument = iframe.contentWindow.document;
    iframe.style.height = iframeDocument.body.scrollHeight + 'px';
    iframe.style.width = iframeDocument.body.scrollWidth + 'px';

    body.columnWidth = iframe.style.width;
    body.columnHeight = iframe.style.height;
}
