import { RouterModule,Routes,Router } from '@angular/router';
import { appComponent } from './app.component';
import { OrderComponent} from './order/order.component';

 export const appRoutes: Routes=[
	{
		path:'',
		redirectTo:'home',
		pathMatch:'full'
	},
	{
		path:'home:1',
		component:appComponent,
	}
	
];
