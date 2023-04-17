import { Injectable } from '@angular/core';
import { Tarefas } from './tarefas';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {
  tarefa: Tarefas[] = [
    { id:1 , titulo: 'Reunião com a equipe de desenvolvimento', descricao: 'Agendar reunião com a equipe de desenvolvimento para alinhar as próximas etapas do projeto', prioridade: 'Normal', status: 'Em Andamento', idLista:1 },
    { id:2 , titulo: 'Implementação da funcionalidade de notificação', descricao: 'Implementar funcionalidade de notificação para alertar os usuários sobre novas atualizações no sistema', prioridade: 'Urgente', status: 'Concluído', idLista:3 },
    { id:3 , titulo: 'Correção de erro na geração de relatório', descricao: 'Corrigir erro na geração de relatório que está impedindo a visualização dos dados corretos', prioridade: 'Normal', status: 'A fazer', idLista:2 },
    { id:4 , titulo: 'Teste de desempenho do sistema', descricao: 'Realizar teste de desempenho do sistema para identificar gargalos e pontos de melhoria', prioridade: 'Normal', status: 'Em Andamento', idLista:1 },
    { id:5 , titulo: 'Melhoria na interface de usuário', descricao: 'Realizar melhorias na interface de usuário para tornar o sistema mais amigável e intuitivo', prioridade: 'Urgente', status: 'Concluído', idLista:2 },
    { id:6 , titulo: 'Análise de dados de vendas', descricao: 'Analisar dados de vendas dos últimos três meses para identificar padrões e tendências de consumo', prioridade: 'Normal', status: 'Em Andamento', idLista:3 },
    { id:7 , titulo: 'Implementação de novo método de pagamento', descricao: 'Implementar novo método de pagamento para ampliar as opções de pagamento para os usuários', prioridade: 'Urgente', status: 'A fazer', idLista:1 },
    { id:8 , titulo: 'Correção de erro na autenticação do usuário', descricao: 'Corrigir erro na autenticação do usuário que está impedindo o acesso ao sistema', prioridade: 'Normal', status: 'Em Andamento', idLista:2 },
    { id:9 , titulo: 'Teste de aceitação do sistema', descricao: 'Realizar teste de aceitação do sistema para verificar se todas as funcionalidades estão funcionando corretamente', prioridade: 'Normal', status: 'A fazer', idLista:3 },
    { id:10 , titulo: 'Melhoria na velocidade de carregamento da página', descricao: 'Realizar melhorias na velocidade de carregamento da página para melhorar a experiência do usuário', prioridade: 'Urgente', status: 'Concluído', idLista:1 },
    { id:11 , titulo: 'Análise de dados de performance do sistema', descricao: 'Analisar dados de performance do sistema para identificar gargalos e pontos de melhoria', prioridade: 'Normal', status: 'Em Andamento', idLista:2 },
    { id:12 , titulo: 'Implementação de novo módulo de vendas', descricao: 'Implementar novo módulo de vendas para ampliar as opções de produtos e serviços oferecidos pelo sistema', prioridade: 'Urgente', status: 'A fazer', idLista:3 },
    { id:13 , titulo: 'Melhoria na funcionalidade de busca', descricao: 'Realizar melhorias na funcionalidade de busca para tornar a pesquisa de informações mais eficiente', prioridade: 'Normal', status: 'Em Andamento', idLista:1 },
    { id:14 , titulo: 'Análise de dados de utilização do sistema', descricao: 'Analisar dados de utilização do sistema para identificar os principais fluxos de navegação dos usuários', prioridade: 'Normal', status: 'Em Andamento', idLista:2 },
    { id:15 , titulo: 'Implementação de funcionalidade de compartilhamento', descricao: 'Implementar funcionalidade de compartilhamento para permitir que os usuários compartilhem informações do sistema com outras pessoas', prioridade: 'Urgente', status: 'Concluído', idLista:3 },
    { id:16 , titulo: 'Correção de erro na atualização de dados', descricao: 'Corrigir erro na atualização de dados que está gerando informações inconsistentes no sistema', prioridade: 'Normal', status: 'A fazer', idLista:1 },
    { id:17 , titulo: 'Teste de segurança do sistema', descricao: 'Realizar teste de segurança do sistema para identificar possíveis vulnerabilidades e garantir a proteção das informações dos usuários', prioridade: 'Urgente', status: 'Em Andamento', idLista:2 },
    { id:18 , titulo: 'Melhoria na integração com outras plataformas', descricao: 'Realizar melhorias na integração com outras plataformas para permitir a integração do sistema com outras ferramentas utilizadas pelos usuários', prioridade: 'Normal', status: 'A fazer', idLista:3 },
    { id:19 , titulo: 'Análise de dados de comportamento do usuário', descricao: 'Analisar dados de comportamento do usuário para entender como os usuários utilizam o sistema e identificar possíveis pontos de melhoria', prioridade: 'Normal', status: 'Em Andamento', idLista:1 },
    { id:20 , titulo: 'Implementação de nova funcionalidade de relatório', descricao: 'Implementar nova funcionalidade de relatório para permitir que os usuários gerem relatórios mais completos e personalizados', prioridade: 'Urgente', status: 'A fazer', idLista:2 },
    { id:21 , titulo: 'Correção de erro na exibição de imagens', descricao: 'Corrigir erro na exibição de imagens que está impedindo a visualização correta das imagens no sistema', prioridade: 'Normal', status: 'Em Andamento', idLista:3 },
    { id:22 , titulo: 'Teste de usabilidade do sistema', descricao: 'Realizar teste de usabilidade do sistema para identificar possíveis dificuldades de uso e tornar o sistema mais intuitivo', prioridade: 'Normal', status: 'Concluído', idLista:1 },
    { id:23 , titulo: 'Melhoria na interface de usuário', descricao: 'Realizar melhorias na interface de usuário para tornar o sistema mais atraente e fácil de usar', prioridade: 'Urgente', status: 'Em Andamento', idLista:2 },
    { id:24 , titulo: 'Análise de desempenho do sistema', descricao: 'Realizar análise de desempenho do sistema para identificar possíveis gargalos e tornar o sistema mais rápido e eficiente', prioridade: 'Normal', status: 'Em Andamento', idLista:3 },
    { id:25 , titulo: 'Implementação de novo sistema de pagamento', descricao: 'Implementar novo sistema de pagamento para ampliar as opções de pagamento oferecidas aos usuários', prioridade: 'Urgente', status: 'A fazer', idLista:1 },
    { id:26 , titulo: 'Correção de erro na geração de relatórios', descricao: 'Corrigir erro na geração de relatórios que está gerando informações inconsistentes no sistema', prioridade: 'Normal', status: 'Em Andamento', idLista:2 },
    { id:27 , titulo: 'Teste de performance do sistema', descricao: 'Realizar teste de performance do sistema para identificar possíveis limitações e melhorar o desempenho do sistema', prioridade: 'Normal', status: 'A fazer', idLista:3 },
    { id:28 , titulo: 'Melhoria na integração com redes sociais', descricao: 'Realizar melhorias na integração com redes sociais para permitir que os usuários compartilhem informações do sistema com outras plataformas', prioridade: 'Normal', status: 'Em Andamento', idLista:1 },
    { id:29 , titulo: 'Análise de dados de utilização da funcionalidade de busca', descricao: 'Analisar dados de utilização da funcionalidade de busca para identificar possíveis problemas e melhorar a eficiência da funcionalidade', prioridade: 'Normal', status: 'A fazer', idLista:2 },
    { id:30 , titulo: 'Implementação de novo sistema de autenticação', descricao: 'Implementar novo sistema de autenticação para tornar o acesso ao sistema mais seguro e prático para os usuários', prioridade: 'Urgente', status: 'Em Andamento', idLista:3 }
  ];

  constructor() { }

  listarTarefas(idLista: number){

    return this.tarefa.filter(t=> t.idLista === idLista);

  }

}