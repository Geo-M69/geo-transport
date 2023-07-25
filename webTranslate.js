function translatePage() {
    const targetLanguage = 'ES'; // Replace 'TARGET_LANGUAGE_CODE' with the language code you want to translate to (e.g., 'FR' for French)
  
    const elements = document.querySelectorAll('body *');
    for (const element of elements) {
      const text = element.innerText;
      if (text.trim() !== '') {
        deepl.translate({
          text: text,
          target_lang: targetLanguage,
          auth_key: '55621fff-312d-7999-442b-ba8e2638d613:fx',
          // Handle the translated text
          callback: function (translatedText) {
            element.innerText = translatedText;
          },
        });
      }
    }
  }
  