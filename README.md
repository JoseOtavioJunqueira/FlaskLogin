# TaskMaster
Este projeto é um site de gerenciamento de tarefas onde os usuários podem marcar os afazeres do dia e verificar o que já foi feito. O site possui uma página inicial, uma página de login e uma página principal onde as tarefas são gerenciadas.
Foi feito com objetivo de demonstrar habilidades em Flask, utilizando banco de dados criptografado e passagem de parâmetros entre Back-End e Front-End.

## Funcionalidades
- **Página Inicial**: Feita com HTML e CSS.
- **Página de Login**: Feita com HTML, CSS e JavaScript, incluindo animações dinâmicas.
- **Página Principal**: Feita com HTML, CSS e JavaScript, permite adicionar, marcar e remover tarefas.

## Tecnologias Utilizadas
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Flask (Python)
- **Banco de Dados**: SQLite com criptografia usando Flask-Bcrypt

## Como Rodar o Projeto
1. Clone o repositório:
```bash
git clone https://github.com/JoseOtavioJunqueira/FlaskLogin.git
```

2. Navegue até o diretório do projeto:
```bash
cd FlaskLogin
```

3.Crie e ative um ambiente virtual (opcional, mas recomendado):
```bash
python -m venv venv source venv/bin/activate # No Windows, use venv\Scripts\activate
```

4. Instale as dependências:
```bash
pip install -r requirements.txt
```
5. Inicie o servidor Flask:
```bash
python app.py
```

6. Acesse o site em http://127.0.0.1:5000

## Estrutura do Projeto
- **app.py**: Código principal da aplicação Flask.
- **templates/**: Contém os arquivos HTML para as páginas do site.
- **home.html**: Página inicial.
- **auth.html**: Página de login e registro.
- **dashboard.html**: Página principal de gerenciamento de tarefas.
- **static/**: Contém os arquivos CSS e JavaScript.
- **database.db**: Banco de dados SQLite.

## Licença
Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.

## Contato
José Otávio - joseotavio.jr1104@gmail.com
