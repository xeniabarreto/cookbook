<img src="./assets/cookbook.jpg" width="100%">

<br>

# API, REST e RESTFUL

## API

### O que é?

API (Application Programming Interface) é um conjunto de regras e protocolos padronizados que permitem a comunicação entre diferentes softwares.

- Intermediador entre as tecnologias e troca de informações.
- Permite que desenvolvedores acessem funcionalidades específicas sem precisar conhecer os detalhes internos.
  <br>

### Qual problema ela resolve?

As APIs resolvem a interoperabilidade, permitindo que diferentes sistemas se conectem e compartilhem informações de forma eficiente. Elas simplificam o desenvolvimento de software, pois os desenvolvedores podem aproveitar as funcionalidades existentes em vez de criá-las do zero.

### Quando utilizá-la?

As APIs são amplamente utilizadas em integração de sistemas empresariais, desenvolvimento de aplicativos móveis e web, e criação de serviços online. Elas são especialmente úteis quando é necessário incorporar funcionalidades de terceiros em um aplicativo ou compartilhar dados e serviços em um sistema distribuído.

<br>

## REST

REST (Representational State Transfer) é um estilo arquitetural para desenvolver sistemas distribuídos na web. Ele define regras, como arquitetura cliente-servidor, operações HTTP e identificação de recursos através de URLs, ou seja, delimita algumas obrigações nas transferências de dados.

<br>

### 6 NECESSIDADES (constraints) para ser RESTful

- _Client-server_: Separação do cliente e do servidor, dessa forma, poderemos permitir o acesso do nosso sistema a outras aplicações em diversas plataformas, como WEB, IOTs, smartphone, por exemplo.

- _Stateless_: Cada requisição que o cliente faz para o servidor, deverá conter todas as informações necessárias para o servidor entender e responder (RESPONSE) a requisição (REQUEST), sem depender de informações armazenadas anteriormente no servidor

  - <strong>Exemplo:</strong> A identificação do usuário deverá ser enviada em todas as requisições, para fornecer todo contexto ao servidor para saber se aquele usuário está autenticado e apto a usar os serviços, e o servidor não pode lembrar que o cliente foi autenticado na requisição anterior.

  <br>

- _Cacheable_: As respostas para uma requisição, deverão ser explicitas ao dizer que aquela requisição pode ou nao ser cacheada pelo cliente.

- _Layered System_: O cliente acessa a um endpoint, sem precisar saber da complexidade, de quais passos estão sendo necessários para o servidor responder a requisição, ou quais as outras camadas o servidor estará lidando, para que a requisição seja respondida.

- _Code on demand (opitional)_: Os servidores podem estender ou personalizar temporariamente a funcionalidade do cliente, transferindo o código de programação de software para o cliente. Por exemplo, quando você preenche um formulário de registro em qualquer site, seu navegador imediatamente destaca os erros cometidos, como números de telefone incorretos. Ele pode fazer isso devido ao código enviado pelo servidor.

<br>

## RESTFUL

Ser RESTful significa seguir os princípios do REST ao projetar e implementar uma API.
Uma API RESTful segue as regras mencionadas anteriormente, permitindo uma comunicação eficiente e flexível entre diferentes sistemas e aplicativos, possibilitando o acesso e manipulação de recursos de forma intuitiva e escalável.

<br>

## BOAS PRÁTICAS

- Utilizar verbos HTTP para nossas requisições.
- Utilizar plural ou singular na criação dos endpoints? _NÃO IMPORTA!_ use um padrão !!
- Não deixar barra no final do endpoint.
- Nunca deixe o cliente sem resposta (status code)!

<br>

### VERBOS HTTP

- GET: Receber dados de um Resource.
- POST: Enviar dados ou informações para serem processados por um Resource.
- PATCH:
- PUT: Atualizar os dados de um Resource.
- DELETE: Deletar um Resource.

<br>

### STATUS DAS RESPOSTAS

- 1xx: Informação
- 2xx: Sucesso
  - 200: OK
  - 201: CREATED
  - 204: Não tem conteúdo PUT POST DELETE
- 3xx: Redirection
- 4xx: Client Error
  - 400: Bad Request
  - 404: Not Found"
- 5xx : Server Error
  - 500: Internal Server Error

<br>

_by Xênia Barreto_
