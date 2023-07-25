// Replace 'YOUR_DEEPL_API_KEY' with your actual DeepL API key
const apiKey = '55621fff-312d-7999-442b-ba8e2638d613:fx';

// Function to translate all text on the webpage
function translateWebpage() {
    // Get all elements that contain text on the webpage
    const elementsWithText = document.querySelectorAll('body *:not(script)');

    // Store all text content to be translated
    const textToTranslate = Array.from(elementsWithText).map(element => element.textContent).join('\n');

    // Perform the translation using DeepL API
    deepl.translate({
        text: textToTranslate,
        target_lang: 'ES', // Replace with your target language code, e.g., 'en', 'fr', 'de', etc.
        auth_key: apiKey,
        split_sentences: 'nonewlines',
        preserve_formatting: 1,
        formality: null
    }, function (result) {
        // Replace the content of each element with the translated text
        elementsWithText.forEach((element, index) => element.textContent = result.translations[index].text);
    });
}

// Add an event listener to trigger the translation when desired
// For example, you can trigger the translation when a button is clicked:
document.getElementById('translateButton').addEventListener('click', function() {
    translateWebpage();
});

// Note: This code assumes that you have included the DeepL API script in your HTML file.
// Make sure to include it before this JavaScript code.
