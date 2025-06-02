import React from "react";
import './style.css';

export default function ArrowToTop() {

    const [hidden, setHidden] = React.useState(true);

    React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHidden(false);
      } else {
        setHidden(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    }, []);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`arrow-to-top ${hidden ? "hidden" : ""}`} onClick={scrollToTop}>
      <i className="pi pi-arrow-up" style={{ fontSize: "1em" }}></i>
    </div>
  );
}