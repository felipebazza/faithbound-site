# Faithbound

Site do jogo em Next.js, com exportação estática.

## Desenvolvimento

Use Node.js 22.

```sh
npm ci
npm run dev
```

Abra `http://localhost:3000`. O comando `npm run build` gera o site em `out/`. Para testar a exportação sob um subdiretório, rode `PAGES_BASE_PATH=/faithbound npm run build` e sirva `out/` sob esse caminho.

## GitHub Pages

No repositório do GitHub, selecione **Settings → Pages → Build and deployment → Source → GitHub Actions**. O workflow publica de forma automática a partir da branch padrão e usa o caminho fornecido pelo Pages para gerar os links e os endereços dos arquivos estáticos.

## Imagens e política

O cenário em `public/valley.webp` foi criado com base no print do jogo. O arquivo `public/faithbound-logo.webp` contém uma versão gerada a partir do logo de referência e pode receber o arquivo original. A política de privacidade cobre o jogo para Android e seu site oficial.
