import React from "react";
import './style.css';

export default function ArrowToTop() {
  const [hidden, setHidden] = React.useState(true);

  React.useEffect(() => {
    const appContainer = document.querySelector('.App');

    if (!appContainer) return;

    const handleScroll = () => {
      if (appContainer.scrollTop > 0) {
        setHidden(false);
      } else {
        setHidden(true);
      }
    };

    appContainer.addEventListener('scroll', handleScroll);
    // Verificamos el estado inicial
    handleScroll();

    return () => {
      appContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const appContainer = document.querySelector('.App');
    if (appContainer) {
      appContainer.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`arrow-to-top ${hidden ? "hidden" : ""}`} onClick={scrollToTop}>
      <i className="pi pi-arrow-up" style={{ fontSize: "1em" }}></i>
    </div>
  );
}