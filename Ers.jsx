import React from 'react';

function Ers() {
  return (
    <div className="ers-content">
      <section className="section">
        <h2>Өзім туралы</h2>
        <p>
          Заманауи JavaScript фреймворктері (React, Node.js) арқылы сапалы веб-қосымшалар әзірлеуде 
          3 жылдан астам тәжірибесі бар, ынталы және жауапты Full Stack әзірлеушімін. 
          Таза код жазуға және пайдаланушыға ыңғайлы интерфейстер жасауға басымдық беремін.
        </p>
      </section>

      <section className="section">
        <h2>Жұмыс тәжірибесі</h2>
        
        <div className="job-item">
          <div className="job-header">
            <h3>Frontend Әзірлеуші</h3>
            <span className="date">2023 - Қазіргі уақыт</span>
          </div>
          <p className="company">TechFlow Solutions</p>
          <ul>
            <li>React және заманауи CSS көмегімен ыңғайлы веб-интерфейстерді әзірледім және қолдадым.</li>
            <li>Дизайнерлермен бірлесіп, макеттерді жоғары өнімді веб-компоненттерге айналдырдым.</li>
            <li>Кодты оңтайландыру арқылы қосымшаның жүктелу жылдамдығын 35%-ға арттырдым.</li>
          </ul>
        </div>

        <div className="job-item">
          <div className="job-header">
            <h3>Junior Web Әзірлеуші</h3>
            <span className="date">2021 - 2023</span>
          </div>
          <p className="company">DigitalCraft Agency</p>
          <ul>
            <li>Клиенттер үшін жеке лендингтер мен интерактивті виджеттер жасадым.</li>
            <li>RESTful API-лерді біріктіріп, React Hooks көмегімен күйді (state) басқардым.</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Білімі</h2>
        <div className="edu-item">
          <div className="job-header">
            <h3>Есептеу техникасы және бағдарламалық қамтамасыз ету бакалавры</h3>
            <span className="date">2017 - 2021</span>
          </div>
          <p className="company">Қ.И. Сәтбаев атындағы ҚазҰТЗУ</p>
        </div>
      </section>
    </div>
  );
}

export default Ers;