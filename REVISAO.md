# Primeira versão — revisão

## Implementação

- Português em `index.html`, inglês em `en/index.html` e espanhol em `es/index.html`.
- Sete seções: hero, sobre, experiência profissional, vivência internacional, idiomas, currículo e contato.
- Conteúdo baseado exclusivamente em `CONTEXTO-LUCAS.md`. Vivência no exterior não é apresentada como emprego no exterior.
- Spectral preservado: CSS principal, bibliotecas, menu lateral e rolagem suave. Personalização concentrada em `assets/css/professional.css` e `assets/js/professional.js`.
- Paleta azul escuro e verde, textos curtos, experiência em duas colunas no desktop e uma coluna no celular.
- Foto de Londres como fundo do hero; enquadramento próprio no celular para preservar o rosto. A mesma fotografia aparece inteira na seção internacional, sem distorção.
- Menu acessível por teclado, Escape para fechar, foco contido no menu aberto, retorno do foco ao acionador e respeito à preferência de movimento reduzido.
- Metadados, idioma do documento, alternância PT/EN/ES, um único H1 por página e links relativos compatíveis com subpastas.
- Créditos HTML5 UP e licença preservados. Sem frameworks ou dependências novas.

## Arquivos

Modificados: `index.html`, `assets/css/noscript.css`.

Criados: `en/index.html`, `es/index.html`, `assets/css/professional.css`, `assets/js/professional.js`, `_config.yml`, `scripts/preview.cjs`, `REVISAO.md`.

`AGENTS.md` e `CONTEXTO-LUCAS.md` já estavam não rastreados antes desta implementação e não foram alterados. Os exemplos e a cópia original do Spectral foram preservados.

## Pendências editoriais

1. Aprovar versões finais dos currículos em português, inglês e espanhol, revisando os dados pessoais antes da publicação. Há PDFs de referência na raiz, mas não foram tratados como versões públicas finais. Os três botões estão desabilitados, com mensagens traduzidas e TODO no HTML; não existem links fictícios.
2. Informar e aprovar expressamente os canais públicos de contato: e-mail, telefone e/ou LinkedIn. Nenhum foi inferido a partir dos PDFs.
3. Identificar e aprovar as demais fotos antes de associá-las a Lisboa, Barcelona ou outros locais. O ponto de expansão da galeria está marcado no HTML.
4. Confirmar o domínio final caso se desejem URLs canônicas e alternates absolutos para SEO. Os links atuais são relativos para permitir revisão local e publicação em qualquer subpasta.

## Visualizar localmente

Na raiz do projeto, com Node.js disponível:

```powershell
node scripts/preview.cjs
```

Abrir `http://127.0.0.1:4173/site_lucas_mifarreg/`.

Também funcionam `/site_lucas_mifarreg/en/`, `/site_lucas_mifarreg/es/` e a raiz `/`. Encerrar com Ctrl+C. O servidor é local e só serve páginas e recursos públicos do site.

## Validação realizada

- Edge headless via Playwright: PT/EN/ES nas larguras 1440, 1024, 390 e 320 pixels.
- Nenhum transbordamento horizontal, erro JavaScript ou resposta HTTP de erro dos recursos locais nessas páginas.
- Sete seções e um H1 por página; destinos internos existentes.
- Menu abre, fecha com Escape e navega para a seção sem sair da versão selecionada.
- Troca PT → EN → ES → PT funcionando sob `/site_lucas_mifarreg/`.
- Navegação do menu sem JavaScript verificada na versão inglesa em largura mobile.
- Revisão visual de capturas completas em desktop e mobile.
- Sintaxe dos novos scripts e `git diff --check` sem erros.

Para revisão manual, testar zoom, Tab/Shift+Tab, menu, seletor de idiomas e botões nas três versões. Os downloads e contatos permanecem indisponíveis até a aprovação editorial.

## GitHub Pages

`_config.yml` exclui os PDFs de referência, fotos originais sem uso, documentos de contexto, scripts e exemplos do template do build padrão do GitHub Pages com Jekyll (Deploy from a branch). Não usar `.nojekyll` com essa estratégia. Se optar futuramente por Actions que enviem a pasta inteira, aplicar a mesma exclusão no artefato de publicação.

O build remoto do Jekyll não foi executado nesta etapa. A configuração não remove arquivos do Git nem do histórico; revisar separadamente a visibilidade do repositório antes de torná-lo público.

Nenhum commit ou push foi realizado.
