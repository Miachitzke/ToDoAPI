import { TarefasComponent } from "../pages/tarefas/tarefas/tarefas.component";

export class Listas {
    id?: number;
    nomeLista!: string;
    usuarioID!: number;

    tarefas?: TarefasComponent;
}