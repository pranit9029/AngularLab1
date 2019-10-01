import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { MainModule } from './CustomerApp/Home/CustomerApp.Mainmodule';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(MainModule)
  .catch(err => console.error(err));
