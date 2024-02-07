# Configuração node + TS + Prisma

### Criar um projeto node com typescript

1. **Iniciar um projeto node**

```bash
npm init -y
```

1. **Instalar as dependências referentes ao typescript**

```bash
npm install -D typescript @types/node ts-node-dev
```

1. **Criar configuração inicial do typescript**

```bash
npx tsc --init
```

1. **Modificar o `tsconfig.json` nas seguintes linhas**

```json
{
	"compilerOptions": {
		"target": "es2022",
		"rootDir": "./src",
		"outDir": "./build",
	},
	"include": ["./src/**/*.ts"],
	"exclude": ["node_modules"]
}
```

1. **Configurar os scripts `dev` e `build` no `package.json`**

```json
"scripts": {
	"dev": "ts-node-dev --respawn --transpile-only ./src",
	"build": "tsc"
}
```

1. **Criar a pasta `src` e dentro dela um arquivo `index.ts`**

No `index.ts`, coloque um `console.log()` qualquer apenas para fazer um teste inicial.

1. **Rode o comando para executar o `index.ts`**

```bash
npm run dev
```

1. Instale o `**express**`

```bash
npm install express cors
npm install -D @types/express @types/cors
```

1. **Configure o app do express na `index.ts`**

```bash
import express from "express";
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.listen(3333, () => {
    console.log("Server running on port 3333.");
});
```

1. **Instalar o Prisma**

```bash
npm install prisma -D
```

1. **Configuração do Prisma**

**Na documentação diz que por padrão ele já vem PostgreSQL (npx prisma init)**

```bash
npx prisma init --datasource-provider postgresql
```