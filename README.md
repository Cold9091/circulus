# Digital Pro Angola - Website

Website institucional da Digital Pro Angola, desenvolvido com React, TypeScript e TailwindCSS.

## 🚀 Tecnologias Utilizadas

- React
- TypeScript
- TailwindCSS
- Framer Motion
- Express.js
- PostgreSQL
- Drizzle ORM

## 📋 Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn
- PostgreSQL

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/Cold9091/meu-site.git
cd meu-site
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente:
Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/database_name"
```

4. Execute as migrações do banco de dados:
```bash
npm run db:migrate
# ou
yarn db:migrate
```

## 🚀 Executando o Projeto

Para desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

Para produção:
```bash
npm run build
npm start
# ou
yarn build
yarn start
```

## 📁 Estrutura do Projeto

```
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/    # Componentes React
│   │   ├── lib/          # Utilitários e configurações
│   │   └── styles/       # Estilos globais
├── server/                # Backend Express
│   ├── routes/           # Rotas da API
│   └── services/         # Serviços e lógica de negócios
├── shared/               # Código compartilhado
└── public/              # Arquivos estáticos
```

## 🌟 Funcionalidades

- Design responsivo e moderno
- Animações suaves com Framer Motion
- Formulário de contato integrado
- Seção de portfólio interativa
- Depoimentos de clientes
- Pacotes de serviços detalhados
- Integração com WhatsApp
- Suporte a tema claro/escuro

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Contribuição

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Contato

Digital Pro Angola - [@digitalproangola](https://instagram.com/digitalproangola)

Link do Projeto: [https://github.com/Cold9091/meu-site](https://github.com/Cold9091/meu-site) 