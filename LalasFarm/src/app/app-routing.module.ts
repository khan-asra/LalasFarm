import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { OfferComponent } from './components/offer/offer.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { StoryComponent } from './components/story/story.component';

const routes: Routes = [
  { path: '', component:  NavBarComponent },
  { path: 'offer', component:  OfferComponent},
  { path: 'contactUs', component:  ContactUsComponent },
  { path: 'Story', component:  StoryComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
