import { Routes } from '@angular/router';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { AboutComponent } from './pages/about/about.component';
import { DescriptionComponent } from './pages/description/description.component';

export const routes: Routes = [
  { path: '', component: BlogListComponent },
  { path: 'sobre', component: AboutComponent },
  { path: 'descricao', component: DescriptionComponent }
];
