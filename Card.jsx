import React from 'react';

function Card() {
  return (
    <div className="card">
      <div className="profile-img-container">
        {/* Сурет сілтемесін өз фотоңызбен алмастыра аласыз */}
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2QaQPm9vXOvU7AtHVXwIxR-tuFtBcTTDCtDnhGlvo-efuoiPJwQmUQJ8&s=10" 
          alt="Profile" 
          className="profile-img" 
        />
      </div>
      
      <h2>Алпысбай Ерсін Ермекұлы</h2>
      <p className="job-title">Full Stack Developer</p>
      
      <div className="contact-section">
        <h3>Байланыс</h3>
        <p>📧 ersin.alpyisbai@email.com</p>
        <p>📱 +7 (777) 123-45-67</p>
        <p>📍 Алматы, Қазақстан</p>
        <p>🌐 github.com/ersinalpyisbai</p>
      </div>

      <div className="skills-section">
        <h3>Дағдылар</h3>
        <div className="skill-chips">
          <span>JavaScript</span>
          <span>React</span>
          <span>Node.js</span>
          <span>CSS / Tailwind</span>
          <span>Git & GitHub</span>
          <span>TypeScript</span>
        </div>
      </div>
    </div>
  );
}

export default Card;