import * as React from 'react'
import Typed from 'typed.js'

const TypedReactHooksDemo = () => {
  const el = React.useRef(null);
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [
        'I am <strong class="coloredText">Nahuel S.</strong>',
        `I am <strong style="font-size: 3rem"><span class="coloredText">Javascript</span> Lover</strong>`,
        '<span style="font-size: 2.5rem">Looking for employment</span>',
        'I am <strong class="coloredText">Nahuel S.</strong>'
      ],
      typeSpeed: 50,
      backSpeed: 50,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    }
  }, [])

  return (
    <span style={{ whiteSpace: 'pre' }} ref={el} />
  );
}

export default TypedReactHooksDemo;