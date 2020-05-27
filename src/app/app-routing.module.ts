import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarefaRoutes } from './tarefas';

// rotas padrão
export const routes: Routes = [
       {
            // manda na URL padrão, ou seja /
        path: '',
        redirectTo: '/tarefas/listar',
        pathMatch: 'full'
       },
    ...TarefaRoutes
];

@NgModule({
    declarations: [],
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule],
    providers: [],
})
export class AppRoutingModule {}
