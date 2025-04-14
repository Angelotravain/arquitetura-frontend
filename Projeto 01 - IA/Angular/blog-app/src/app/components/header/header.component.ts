import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="header">
      <nav class="navigation">
        <a routerLink="/">Blog</a>
        <a routerLink="/sobre">Sobre</a>
        <a routerLink="/descricao">Descrição</a>
      </nav>
      <div class="profile">
        <img src="https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg" alt="Profile picture" class="profile-image">
        <div class="profile-content">
          <h1 class="name">Doge Avaliacao</h1>
          <p class="bio">
            Coloque aqui sua biografia de forma resumida. Coloque aqui sua
            biografia de forma resumida Coloque aqui sua biografia de forma
            resumida Coloque aqui sua biografia de forma resumida
          </p>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .header {
      background-color: #2b4c7e;
      color: white;
      padding: 1rem;
      font-family: Arial, sans-serif;
    }

    .navigation {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      margin-bottom: 1rem;

      padding-bottom: 1rem;
    }

    .profile {
      display: flex;
      align-items: flex-start;
      gap: 2rem;
      max-width: 800px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .profile-image {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .profile-content {
      flex: 2;
      text-align: justify;
    }

    .name {
      font-size: 2rem;
      margin-bottom: 0.5rem;
      font-weight: 600;
      font-family: Arial, sans-serif;
    }

    .bio {
      line-height: 1.4;
      font-size: 0.85rem;
      opacity: 0.9;
      margin: 0;
      font-family: Arial, sans-serif;
    }

    .navigation a {
      color: white;
      text-decoration: none;
      font-weight: 500;
    }

    .navigation a:hover {
      text-decoration: underline;
    }
  `],
  imports: [
    RouterLink
  ]
})
export class HeaderComponent {}