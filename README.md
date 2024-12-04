
# Aurora Refúgio

Aurora Refúgio é uma plataforma desenvolvida para apoiar refugiados localizados em Brasília e arredores. O objetivo é oferecer guias práticos, notícias relevantes e acesso a programas de apoio que facilitem a integração dos refugiados na sociedade brasileira. A aplicação prioriza acessibilidade, inclusão, suporte multilíngue e privacidade de dados.

O projeto conta com um mascote especial, a cadela **Aurora**, que guia os usuários pela plataforma, promovendo uma experiência acolhedora e intuitiva.

## 🚀 Principais Funcionalidades

1. **Autenticação de Usuários:**
   - Sistema de login e registro via backend usando `authModel`.
   - Persistência do status de login através de `localStorage`.

2. **Guias e Manuais Práticos:**
   - Guias divididos em seções com explicações e perguntas interativas.
   - Registro de guias completados na tabela `completedGuides`, armazenando `user_id`, `guide_id`, `completed_at` e `created_at`.

3. **Sistema de Questionários:**
   - Perguntas com alternativas e feedback imediato ao usuário.
   - Destaque da pergunta correta e progresso visual através de uma barra de progresso.
   - Registro automático da conclusão do guia no banco de dados.

4. **Notícias Relevantes:**
   - Área dedicada a notícias sobre temas de interesse para refugiados, com foco no contexto brasileiro.

## 📚 Tecnologias Utilizadas

1. **Frontend:**
   - **React.js**: Interface de usuário dinâmica e responsiva.
   - **Tailwind CSS**: Estilização rápida e consistente.
   - **React Router**: Gerenciamento de rotas da aplicação.

2. **Backend:**
   - **Node.js** com **Express**: API REST para comunicação com o banco de dados.
   - **Supabase**: Banco de dados para armazenamento de dados dos usuários, guias e progresso.

## 📂 Estrutura do Projeto

```
Aurora-Refugio/
│
├── backend/
│   ├── controllers/
│   │   └── guideControllers.mjs
│   ├── models/
│   │   └── guideModel.mjs
│   └── routes/
│       └── guideRouter.mjs
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── Header.js
│   │   ├── pages/
│   │   │   └── FormPage.js
│   │   └── App.js
│   └── public/
│
└── README.md
```

## 📑 Alguns Endpoints da API

1. **Guias Disponíveis:**
   - `GET /guides/:id/sections`
     - Retorna as seções do guia especificado.

2. **Perguntas por Seção:**
   - `GET /guides/:section_id/questions`
     - Retorna as perguntas da seção.

3. **Registrar Guia Completo:**
   - `POST /guides/complete`
     - Registra a conclusão de um guia no banco de dados.

## 💡 Próximos Passos e Melhorias

1. **Implementar Suporte Multilíngue:**
   - Adicionar suporte para idiomas relevantes aos refugiados.

2. **Sistema de Notificações:**
   - Notificar usuários sobre novos guias e notícias importantes.

3. **Melhorias em Acessibilidade:**
   - Adicionar mais recursos para garantir acessibilidade total.

4. **Integração com Mais APIs:**
   - Expandir integrações, como APIs de empregos e serviços de saúde.

## 📝 Como Contribuir

1. Faça um fork deste repositório.
2. Crie uma branch com sua feature: `git checkout -b feature/nome-da-feature`.
3. Faça commit das alterações: `git commit -m 'Adiciona nova feature'`.
4. Faça push para a branch: `git push origin feature/nome-da-feature`.
5. Abra um Pull Request.

## 🤝 Agradecimentos

A todos os colaboradores e parceiros que contribuem para o sucesso do Aurora Refúgio. A missão de apoiar refugiados é coletiva, e cada contribuição faz a diferença.

**Desenvolvido por:** André Queiroz, Gabriel Henrique e João Gabriel
