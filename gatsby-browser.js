exports.onClientEntry = () => {
  console.log('client is here');
  if (typeof document === 'object') {
    (() => {
      let initializedForm = false;

      const loadForm = () => {
        if (initializedForm === false) {
          initializedForm = true;
          window.MktoForms2.loadForm('//pages.getpostman.com', '067-UMD-991', 1376);
        }
      };
      const s = document.createElement('script');

      s.type = 'text/javascript';
      s.async = true;
      s.src = '//pages.getpostman.com/js/forms2/js/forms2.min.js';
      s.onreadystatechange = () => {
        if (this.readyState === 'complete' || this.readyState === 'loaded') {
          loadForm();
        }
      };
      s.onload = loadForm;

      document.getElementsByTagName('head')[0].appendChild(s);
    })();
  }
};
