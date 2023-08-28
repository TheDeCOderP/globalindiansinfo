import React, { useEffect } from 'react';

const TranslatePage = () => {
  useEffect(() => {
    // Load Google Translate script
    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    // Function to initialize the Google Translate Element
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: 'en,es,fr,hi,pa,gu,te,ta,kn,ar,it,ml,pa,bn'}, 'google_translate_element');
    };
  }, []);

  return (

      <div id="google_translate_element"></div>

  );
};

export default TranslatePage;
