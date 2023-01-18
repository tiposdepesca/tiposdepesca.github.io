/* Nome: Maria Juvandes - 3200715 | Nome: André Ribeiro - 3200750 |
Enunciado: Perspetivas | Curso Design Gráfico e Multimédia - 3º Ano | U.C.: Laboratório de Projeto I | Ano: 2022/23 - 1º Semestre | ESAD.CR | Docente: Marco Heleno | Data: 18/01/2023 */

// Criação de variáveis para serem utilizadas
let scene;
let mouseIsReleased;
let data_table, data_elements;
let textura_anos, textura_categorias, textura_fundo;
let tamanho_referencia_canvas;
let objeto3D;
let fundo;
let font,
  fontsize = 40;
let parede_largura;



//"function preload()" é usado para fazer carregar os ficheiros antes do "setup() function". Corre apenas uma vez quando o "sketch" é carregado.
function preload()
{
  
  //Carregar a fonte
  font = loadFont('assets/TAHOMABD.TTF');
  
  objeto3D = loadModel('assets/carpa.obj', true);
//Aqui carrega-se a tabela de valores
  data_table = loadTable ("assets/dataset.csv" , "csv" , "header");
//Aqui carregam-se os ficheiros para dar valor às variáveis
  textura_anos = loadImage ("assets/Texturas1-01.png");
  textura_categorias = loadImage ("assets/Texturas1-02.png");
  textura_fundo = loadImage ("assets/Texturas-03.jpg");
  fundo = loadImage ("assets/Fundo_Mar.jpg");
}

//O "setup() function" é executado quando o programa é iniciado. É utilizado para estabelecer as propriedades iniciais do ambiente como o tamanho do ecrã, cor de fundo e carregar os ficheiros mídia como imagens e fontes
function setup()
{
  createCanvas (windowWidth, windowHeight, WEBGL);
//Se a Largura da janela for maior do que a Altura, o tamanho de referência é a Altura.
  if (windowWidth > windowHeight) tamanho_referencia_canvas = windowHeight;
  else 
//Se a Altura da janela for maior do que a Largura, o tamanho de referência é a Largura.
  if (windowHeight > windowWidth) tamanho_referencia_canvas = windowWidth/1.2;
  
  //Para determinar o valor de "scene".
  scene = 1;
  //Para determinar o que acontece quando o botão do rato é liberto.
  mouseIsReleased = true;
 
  //Determinar as características do texto
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, TOP);
  
  
  //Carregar a informação.
  importData();
}

 // O "draw() function" começa só depois do "setup() function". É utilizado para executar o código dentro do bloco até o programa ser interrompido ou "noLoop()" ser executado. Se o programa não conter "noLoop() function" dentro do "setup() function" então o "draw() function" vai continuar a ser executado uma vez antes de ser parado. Deve ser sempre controlado com "noLoop()", "redraw()" e "loop() functions".
function draw() 
{
  //Executar uma ordem se uma condição especificada é verdade. Se a condição for "false" a outra ordem opcional na cláusula "else" é executada.
  if (scene === 1) intro();
  else 
  if (scene === 2) context();
  else
  if (scene === 3) vis();
}

//Esta função é chamada cada vez que o botão do rato é liberto. 
function mouseReleased() 
{
  mouseIsReleased = true;
}


function windowResized() 
{
  //"resizeCanvas" - redimensiona a tela para determinada largura e altura.
  resizeCanvas (windowWidth, windowHeight);
  
  if (windowWidth > windowHeight) tamanho_referencia_canvas = windowHeight;
  else 
    //Se a Altura da janela for maior do que a Largura, o tamanho de referência é a Largura a dividir por 1.2.
  if (windowHeight > windowWidth) tamanho_referencia_canvas = windowWidth/1.2;
  
}


