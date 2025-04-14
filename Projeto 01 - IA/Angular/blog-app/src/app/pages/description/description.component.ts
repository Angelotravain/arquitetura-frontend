import { Component } from '@angular/core';

@Component({
  selector: 'app-description',
  standalone: true,
  template: `
    <div class="description-container">
      <h2 class="page-title">Descrição do Projeto</h2>
      <div class="content">
        <section class="project-section">
          <h3>Sobre o Projeto</h3>
          <p>
            Este é um blog pessoal desenvolvido com Angular, demonstrando boas práticas
            de desenvolvimento e componentização. O projeto utiliza recursos modernos
            do framework como standalone components e estilização com SCSS.
          </p>
        </section>

        <section class="features-section">
          <h3>Funcionalidades</h3>
          <ul class="features-list">
            <li>
              <strong>Componentes Reutilizáveis:</strong>
              Estrutura modular com componentes independentes
            </li>
            <li>
              <strong>Roteamento:</strong>
              Navegação fluida entre diferentes páginas
            </li>
            <li>
              <strong>Design Responsivo:</strong>
              Layout adaptável para diferentes dispositivos
            </li>
            <li>
              <strong>Estilização Moderna:</strong>
              Uso de SCSS para uma estilização mais organizada
            </li>
          </ul>
        </section>

        <section class="tech-section">
          <h3>Tecnologias Utilizadas</h3>
          <ul class="tech-list">
            <li>Angular 17</li>
            <li>TypeScript</li>
            <li>SCSS</li>
            <li>Angular Router</li>
          </ul>
        </section>
      </div>
    </div>
  `,
  styles: [`
    .description-container {
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

    section {
      background-color: #f7fafc;
      padding: 1.5rem;
      border-radius: 0.5rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    h3 {
      color: #2c5282;
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }

    p {
      color: #4a5568;
      line-height: 1.6;
      margin-bottom: 1rem;
    }

    .features-list,
    .tech-list {
      list-style: none;
      padding: 0;
      display: grid;
      gap: 1rem;
    }

    .features-list li {
      color: #4a5568;
      line-height: 1.5;
    }

    .features-list strong {
      color: #2c5282;
      display: block;
      margin-bottom: 0.25rem;
    }

    .tech-list {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
    }

    .tech-list li {
      background-color: #ebf4ff;
      color: #2c5282;
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;
      font-weight: 500;
    }
  `]
})
export class DescriptionComponent {}