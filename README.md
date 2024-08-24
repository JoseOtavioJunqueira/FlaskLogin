# TaskMaster
Este projeto é um site de gerenciamento de tarefas onde os usuários podem marcar os afazeres do dia e verificar o que já foi feito. O site possui uma página inicial, uma página de login e uma página principal onde as tarefas são gerenciadas.

## Funcionalidades
- **Página Inicial**: Feita com HTML e CSS.
- **Página de Login**: Feita com HTML, CSS e JavaScript, incluindo animações dinâmicas.
- **Página Principal**: Feita com HTML, CSS e JavaScript, permite adicionar, marcar e remover tarefas.

## Tecnologias Utilizadas
- **Frontend**: HTML, CSS, JavaScript
- **Backend: Flask (Python)
- **Banco de Dados**: SQLite com criptografia usando Flask-Bcrypt

## Como Rodar o Projeto
1. Clone o repositório:

git clone https://github.com/seu-usuario/nome-do-repositorio.git

Navegue até o diretório do projeto:

cd nome-do-repositorio

Crie e ative um ambiente virtual (opcional, mas recomendado):

python -m venv venv source venv/bin/activate # No Windows, use venv\Scripts\activate

Instale as dependências:

pip install -r requirements.txt

Inicie o servidor Flask:

python app.py

Acesse o site em http://127.0.0.1:5000

Estrutura do Projeto
app.py: Código principal da aplicação Flask.
templates/: Contém os arquivos HTML para as páginas do site.
home.html: Página inicial.
auth.html: Página de login e registro.
dashboard.html: Página principal de gerenciamento de tarefas.
static/: Contém os arquivos CSS e JavaScript.
database.db: Banco de dados SQLite.
Contribuindo
Sinta-se à vontade para contribuir com melhorias ou relatar problemas. Para contribuir:

Faça um fork do repositório.
Crie uma nova branch (git checkout -b minha-branch).
Faça suas alterações e faça commit (git commit -am 'Adiciona nova funcionalidade').
Envie para o repositório remoto (git push origin minha-branch).
Abra um pull request.
Licença
Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.

Contato
José Otávio - seu-email@example.com
