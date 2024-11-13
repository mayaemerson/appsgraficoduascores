# Google Apps Script - Gráfico Dinâmico de Realização vs Meta
Este projeto foi desenvolvido para atender a uma demanda específica de um usuário do Google Sheets que precisava de um gráfico dinâmico onde os valores de realização vs meta fossem exibidos na mesma coluna do gráfico, mudando a cor da barra automaticamente conforme o desempenho. Essa abordagem permite que, em vez de duas barras por período (comum em soluções padrão do Google Sheets), a cor da mesma barra se adapte, ficando verde para valores que atingem ou superam a meta e vermelha para valores abaixo.

Desenvolvido usando Google Apps Script e HTML com integração de Chart.js, este projeto supera uma limitação do Google Sheets, permitindo uma visualização mais intuitiva e direta do desempenho.

# Funcionalidades
* Gráfico dinâmico com cores: As barras mudam de cor automaticamente (verde para valores que atingem ou superam a meta, vermelho para valores abaixo).
* Atualização automática: O gráfico é atualizado a cada 5 segundos para refletir os dados mais recentes da planilha.
* Integração via modal: Exibe o gráfico em um modal personalizado dentro do Google Sheets, melhorando a visualização do progresso em tempo real.

# Tecnologias Utilizadas
* Google Apps Script: Para interagir com o Google Sheets e exibir o gráfico no modal.
* HTML/CSS: Interface de exibição do gráfico com uso de Tailwind CSS para estilização.
* Chart.js: Biblioteca de gráficos JavaScript para criar visualizações de dados interativas.

# Requisitos
* Node.js e npm (para instalar o clasp)
* Google Apps Script API ativada no projeto Google Cloud

# Instalação e Configuração
#### Clone o repositório:
```
git clone https://github.com/usuario/repositorio.git
cd repositorio
```
#### Instale as dependências do projeto:
```
npm install

```
#### Comandos do Clasp:
##### Não vamos abordar o clasp nesse projeto mas abaixo comando básicos dele.
##### No meu canal eu tenho um vídeo que aborda o clasp.
#### [Video Clasp No Youtube](https://youtu.be/mntIp0SU2KQ)
```
clasp login  - Fazer login na sua conta google.
clasp pull   - Puxar valores do apps script
clasp push   - Enviar valores para o Apps Script

```
