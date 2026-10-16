# AgroVolt — protótipo Next.js

Projeto pronto para abrir na sua IDE e publicar na Vercel. A página Next.js carrega o dashboard interativo que está em `public/dashboard.html`.

> **Importante:** este é um protótipo de apresentação. Sensores, coordenadas, falhas, alertas, equipes e bateria são simulados. Não há conexão com equipamentos reais.

## Rodar localmente

Requisitos: Node.js 20.9+ e npm.

1. Extraia o ZIP e abra a pasta `agrovolt-nextjs` no VS Code.
2. No terminal, dentro da pasta, rode:

```bash
npm install
npm run dev
```

3. Abra http://localhost:3000

## Publicar na Vercel

1. Crie um repositório no GitHub e envie todos os arquivos desta pasta.
2. Entre em https://vercel.com e escolha **Add New → Project**.
3. Importe o repositório.
4. Mantenha as configurações detectadas de Next.js e clique em **Deploy**.
5. Após publicar, copie a URL pública HTTPS fornecida pela Vercel.
6. Gere um QR Code apontando para essa URL e teste com um celular fora da sua rede Wi-Fi.

## Interações no protótipo

- Simular falha de sensor.
- Designar equipe.
- Simular restabelecimento de energia.
- Simular consumo de bateria.
- Baixar um relatório demonstrativo.

## Para evoluir além da demonstração

A próxima etapa seria substituir dados simulados por uma API, banco de dados, autenticação, mapa real e integração segura com sensores. Intervenções em redes elétricas precisam de profissionais habilitados e autorização da distribuidora.
