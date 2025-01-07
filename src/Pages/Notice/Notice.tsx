import React, { useState } from "react";
import MarkdownRenderer from "../../Components/MarkdownRenderer";

const initialMarkdown = `
# Bem-vindo ao Markdown
Este é um exemplo de como **Markdown** funciona no React.

## Funcionalidades
- **Negrito**, _Itálico_ e ~~Tachado~~.
- Listas numeradas:
  1. Primeiro item
  2. Segundo item
- Listas não ordenadas:
  - Item A
  - Item B

## Código
\`\`\`javascript
console.log("Olá, mundo!");
\`\`\`

## Tabelas
| Nome    | Idade | Profissão       |
|---------|-------|-----------------|
| Alice   | 25    | Desenvolvedora  |
| Bob     | 30    | Designer        |

## Listas de Tarefas
- [x] Adicionar suporte a Markdown
- [ ] Melhorar estilo
`;

const Notice: React.FC = () => {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Editor de Markdown</h1>
      <textarea
        className="w-full h-40 p-2 border rounded-md mb-4"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <MarkdownRenderer content={markdown} />
    </div>
  );
};

export default Notice;
