import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {NewsComponent} from "./pages/news/news.component";
import {ProjectsComponent} from "./pages/projects/projects.component";
import {AboutComponent} from "./pages/about/about.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  }, {
    path: 'news',
    component: NewsComponent
  }, {
    path: 'projects',
    component: ProjectsComponent
  }, {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
