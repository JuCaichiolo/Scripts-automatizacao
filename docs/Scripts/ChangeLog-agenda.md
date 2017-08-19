---
layout: page
title: ChangeLog Script Agenda
menu: ChangeLog Agenda
parent: scripts.md
weight: 0
---

# Agenda

Este é um Google Script voltado para agendamento da Salinha do IEEE UFABC. Ele faz parte de um processo de automatização que está sendo desenvolvido.

Suas funções são:
- Enviar solicitação de reserva da Salinha do IEEE.
- Criar dados de solicitação da Salinha.

## Todo:

---------------------------------------------------------------------------

*Versão atual: 0.1.X*

---------------------------------------------------------------------------

- [ ] Trocar as cores do formulário - Verificar necessidade. 
- [ ] Revisão ortográfica. - Código completo, documentação e comentários.
- [ ] Fazer documentação para modificação - Novo arquivo.
- [ ] Fazer documentação de uso - Novo arquivo.
- [ ] Envio de email para solicitante - Criar função.
  - [ ] Na soliticação?
  - [ ] Na decisão do operador? 
- [ ] Criar método de visualização dos calendários.
- [ ] Definição dos campos.
- [ ] Definições das Expressões regulares de verificação dos campos de entrada.
- [ ] Decisão se form em HTML ou em Google Form.


---------------------------------------------------------------------------

### Melhorias Programadas

- [ ] Separação do código em funções.

---------------------------------------------------------------------------

### Ideias

- [ ] Mostrar calendário solicitado e calendário real no form.

---------------------------------------------------------------------------

## Controle de versões

### **0.0.1**

- [x] Definição dos campos do formulário e funcionamento dos mesmos.

### **0.1.0**

- [x] Criação do script.
      - [x] Evento é marcado no calendário assim que o formulário foi enviado.

### **0.2.0**

- [x] Comentários do script.

- [x] Autorização de um operador é necessária para que o script
  faça o agendamento. 

### **0.2.12**
  - [x] Correção do "if" de verificação de dados - agora não é necessario deletar os eventos..

