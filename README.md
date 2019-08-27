REPENTE CSS
===========

[![Greenkeeper badge](https://badges.greenkeeper.io/oliveiraev/repente-css.svg)](https://greenkeeper.io/)

Desafio de menus propostos no [Fórum iMasters](http://forum.imasters.com.br/topic/354140-repente-css-menus/)

Idealizado por William Bruno (http://wbruno.com.br)

## Construindo

### Dependências

* [npm](http://npmjs.org)
* [grunt-cli](http://gruntjs.com)
* [bower](http://bower.io)

As duas últimas dependências podem ser instaladas via NPM.

### Preparando

Baixe as dependências npm do projeto

  $ npm install

A partir deste momento, um aplicativo _grunt_ estará disponível.

#### Configurando as dependências mínimas

  $ grunt

Isto fará o grunt baixar os pacotes bower necessários, separar e
minificar apenas os arquivos relevantes e os disponibilizará em
_/src/lib_.

Os arquivos .css e .js de cada menu também terão sua própria versão
minificada gerada e disponibilizada em
/src/#menu/html{4,5}/{css,js}/nomeoriginal.min.{css,js}

## Modificando

**Este projeto é livre para modificações e alterações em toda e
qualquer parte de sua estrutura.**

Por conta de as markups apontarem para as versões minificadas dos
componentes, toda vez que for realizado uma alteração nos arquivos,
uma nova versão correspondente minificada deve ser gerada novamente.

Há um facilitador/automatizador deste processo disponível em

  $ grunt watch

Para gerar, manualmente, as versões compactadas, utilize

  $ grunt cssmin:src

## Contribuindo

O arquivo .gitignore já cobre boa parte do produto que não é
relevante ou não deve ser enviado para os repositórios. Contudo, antes
de efetuar um _pull request_, é recomendável que se execute
```$ grunt clean``` para se certificar de que conteúdo indesejado ou
sensível seja, ainda que acidentalmente, enviado a público.
