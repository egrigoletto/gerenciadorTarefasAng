import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  /* método de listar todos */
  listarTodos(): Tarefa[] {
    // tslint:disable-next-line: no-string-literal
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  /* método de cadastro */
  cadastrarTarefa(tarefa: Tarefa): void {
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getDate();
    tarefas.push(tarefa);
    // tslint:disable-next-line: no-string-literal
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  /*busca por ID */
  buscarTarefaPorId(id: number): Tarefa {
    const tarefas: Tarefa[] =  this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id);
  }

  /*atualizar tarefa */
  atualizarTarefa(tarefa: Tarefa): void{
    const tarefas: Tarefa[] =  this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (tarefa.id === obj.id){
        objs[index] = tarefa;
      }
    });
    // tslint:disable-next-line: no-string-literal
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  /*remoção lógica de tarefas do array de tarefa */
  removerTarefa(id: number): void{
    let tarefas: Tarefa[] =  this.listarTodos();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    // tslint:disable-next-line: no-string-literal
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  /* alterar tarefa para feita */
  alterarStatus(id: number): void{
    const tarefas: Tarefa[] =  this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (id === obj.id){
        objs[index].concluida = !objs[index].concluida;
      }
    });
  }
}
