import { Component } from '@angular/core';

interface BlogPost {
  title: string;
  excerpt: string;
}

@Component({
  selector: 'app-blog-list',
  standalone: true,
  template: `
    <section class="blog-list">
      <h2 class="section-title">Últimas do blog</h2>
      <div class="posts">
        @for (post of posts; track post.title) {
          <article class="post-card">
            <h3>{{ post.title }}</h3>
            <p>{{ post.excerpt }}</p>
          </article>
        }
      </div>
      <div class="view-all">
        <a href="#">Ver tudo</a>
      </div>
    </section>
  `,
  styles: [`
    .blog-list {
      padding: 1rem 2rem;
      max-width: 800px;
      margin: 0 auto;
    }

    .section-title {
      font-size: 1.25rem;
      color: #2b4c7e;
      margin-bottom: 1rem;
      font-weight: 500;
    }

    .posts {
      display: grid;
      gap: 1rem;
    }

    .post-card {
      padding: 1rem;
      border: 1px solid #e2e8f0;
      border-radius: 0.25rem;
      transition: transform 0.2s;
      background: white;
    }

    .post-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .post-card h3 {
      color: #2b4c7e;
      margin-bottom: 0.5rem;
      font-size: 1.1rem;
      font-weight: 500;
    }

    .post-card p {
      color: #4a5568;
      line-height: 1.5;
      font-size: 0.9rem;
      margin-top: 0.25rem;
    }

    .view-all {
      text-align: center;
      margin-top: 2rem;
    }

    .view-all a {
      color: #2b4c7e;
      text-decoration: none;
      font-weight: 500;
      font-size: 0.9rem;
    }

    .view-all a:hover {
      text-decoration: underline;
    }
  `]
})
export class BlogListComponent {
  posts: BlogPost[] = [
    {
      title: '5 dicas para sua carreira profissional',
      excerpt: 'Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end'
    },
    {
      title: 'Como melhorar seu código JavaScript',
      excerpt: 'Aprenda técnicas avançadas para escrever um código JavaScript mais limpo e eficiente'
    },
    {
      title: 'Tendências em desenvolvimento web',
      excerpt: 'Descubra as principais tendências e tecnologias que estão moldando o futuro do desenvolvimento web'
    }
  ];
}