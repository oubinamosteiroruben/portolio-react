import React, { useRef, useState, useEffect } from "react";
import "./style.css";

export default function DinamicList({ title, items }) {
  const listRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("DinamicList visible", entry); // Debug: comprobar en consola
            setIsVisible(true);
            //observerInstance.unobserve(entry.target);
          }else{
            console.log("DinamicList not visible", entry); // Debug: comprobar en consola
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (listRef.current) {
      observer.observe(listRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <ul ref={listRef} className={`dinamic-list ${isVisible ? "visible" : ""}`}>
      {title && <h2 className="dinamic-list-title">{title}</h2>}
      {items.map((item, index) => (
        <li key={index} className="dinamic-list-item">
          <span className="dinamic-list-item-text">{item.text}</span>
          {item.icon && (
            <i className={`pi ${item.icon} dinamic-list-item-icon`} style={{ fontSize: "1.5em" }}></i>
          )}
        </li>
      ))}
    </ul>
  );
}