# Minhas-Tarefas
Recuperação


# App de Lista de Tarefas - React Native

Este é um aplicativo simples de lista de tarefas (To-Do List) desenvolvido com **React Native**, utilizando **TypeScript**. Ele permite que o usuário adicione, marque como concluída e remova tarefas.

---

## Funcionalidades

- Adicionar nova tarefa
- Marcar tarefa como concluída
- Reverter tarefa para "não concluída"
- Excluir tarefa da lista
- Mensagem quando não há nenhuma tarefa cadastrada

---

## Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- Componentes básicos do React Native (`View`, `Text`, `TextInput`, `TouchableOpacity`, `FlatList`, etc.)

---

## Estrutura do Projeto

O projeto é estruturado em um único arquivo `App.tsx`, contendo:

- `TaskInput`: Campo de texto e botão "Adicionar"
- `TaskItem`: Representação visual de uma tarefa
- `TaskList`: Lista de tarefas com suporte a toggle e delete
- `App`: Componente principal com lógica de estado e renderização

---

## Como Executar

### Pré-requisitos

- Node.js instalado
- Expo CLI ou React Native CLI (dependendo do ambiente)
- Emulador Android/iOS ou dispositivo físico com o Expo Go

### Instalação

# Clone o repositório
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio

# Instale as dependências
npm install
# ou
yarn install


Execução (Expo)
npx expo start
