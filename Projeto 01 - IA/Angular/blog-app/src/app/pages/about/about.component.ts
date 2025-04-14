import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="about-container">
      <h2 class="page-title">Sobre mim</h2>
      <div class="content">
        <div class="skills-section">
          <h3>Habilidades</h3>
          <ul class="skills-list">
            <li>Desenvolvimento Front-end</li>
            <li>Angular</li>
            <li>TypeScript</li>
            <li>HTML & CSS</li>
            <li>UI/UX Design</li>
          </ul>
        </div>
        <div class="experience-section">
          <h3>Experiência</h3>
          <div class="experience-item">
            <h4>Desenvolvedor Front-end Senior</h4>
            <p class="company">Empresa XYZ</p>
            <p class="period">2020 - Presente</p>
            <p class="description">
              Desenvolvimento de aplicações web modernas utilizando Angular e
              outras tecnologias front-end. Liderança técnica de equipe e
              mentoria de desenvolvedores júnior.
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .about-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
    }

    .page-title {
      color: #2c5282;
      font-size: 2rem;
      margin-bottom: 2rem;
      text-align: center;
    }

    .content {
      display: grid;
      gap: 2rem;
    }

    h3 {
      color: #2c5282;
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }

    .skills-list {
      list-style: none;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .skills-list li {
      background-color: #ebf4ff;
      color: #2c5282;
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;
      font-weight: 500;
    }

    .experience-item {
      background-color: #f7fafc;
      padding: 1.5rem;
      border-radius: 0.5rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .experience-item h4 {
      color: #2c5282;
      margin-bottom: 0.5rem;
      font-size: 1.25rem;
    }

    .company {
      color: #4a5568;
      font-weight: 500;
      margin-bottom: 0.25rem;
    }

    .period {
      color: #718096;
      font-size: 0.875rem;
      margin-bottom: 1rem;
    }

    .description {
      color: #4a5568;
      line-height: 1.5;
    }
  `]
})
export class AboutComponent {}