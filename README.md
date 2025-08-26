# mobile-login
Projeto de aprendizado de Programação mobile React Native

# Dependências
Sistema Operacional Ubuntu 22.04

NVM:
    $ wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
    $ nvm install --lts
  Mais informações em https://github.com/nvm-sh/nvm 
  
  Verificar Instalação:
    $ node -v 
    $ npm -v
    $ nvm list (caso tenha instalado via NVM)


Yarn:
    $ corepack enable
    $ sudo nano ~/.bashrc
  Colar na última linha: export PATH="$(yarn global bin):$PATH"
  Verificar Instalação: $ yarn -v


# Inicialização do projeto

Criação de um projeto:
$ yarn create expo --template
Se preferir npm: npx create-expo-app my-app --template
Selecionar o template “Blank (TypeScript)” quando for solicitado
-- Instalar dependências necessárias conforme retorno no terminal
$ cd hello_world
$ yarn start
Para executar via túnel use:
$ yarn start --tunnel
Para executar alguma plataforma específica use os atalhos: 
$ yarn android
$ yarn ios
$ yarn web (tente! React é vida!)

criar pasta src/components na raiz do projeto
