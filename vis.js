//Visualização
function vis()
{
  //Aqui é para definir a cor de fundo e a luz ambiente
  background (20, 20, 100);
  imageMode(CENTER);
  //Tornar a imagem "responsive".
  if (height>width) fundo.resize(0, height*4);
  else fundo.resize(width*4, 0);
  push();
  translate (0, 0, tamanho_referencia_canvas/data_table.getRowCount()*-13);
  image (fundo, 0, 0);
  pop();
  
  textAlign(CENTER);
  drawWords(width); 
  
  
  
  //Aqui é para criar e nomear novas constantes. Uma constante criada com "const" é recipiente para um determinado valor.
  parede_largura = tamanho_referencia_canvas*1.5;
  const parede_altura  = tamanho_referencia_canvas*1.5;
  const parede_profundidade = tamanho_referencia_canvas*1.5;
  
  const x = 0;
  const y = -height/8;
  //O código "getRowCount" serve para buscar o número de filas da tabela.
  const z = tamanho_referencia_canvas/data_table.getRowCount()*-7;
  
  //O "push();" é utilizado para guardar alguma alteração/transformação. É sempre utilizado juntamente com o "pop();".
  push();
  //"translate" - especifica um valor para deslocação dos objetos dentro da janela de exibição.
    translate (x, y, z);
  //"angleMode" - define o modo atual de p5 para o modo fornecido.
    angleMode (DEGREES);
  //"rotateY" - Faz a rotação de um objeto pelo eixo Y com os valores especificados no parâmetro do ângulo.  
  rotateY (45);
  //Aqui é para colocar o espaço de coordenadas para mapeamento da textura. "NORMAL" refere a um espaço em que apenas é necessário utilizar valores entre o 0 e 1.
    textureMode (NORMAL);
    
   strokeWeight (0)
      fill (255,255,255,45)
      beginShape();
  //Aqui é criada uma parede transparente.
      vertex (-parede_largura/2, -parede_altura/2, -parede_profundidade/2, 0, 0);
      vertex ( parede_largura/2, -parede_altura/2, -parede_profundidade/2, 1, 0);
      vertex ( parede_largura/2,  parede_altura/2, -parede_profundidade/2, 1, 1);
      vertex (-parede_largura/2,  parede_altura/2, -parede_profundidade/2, 0, 1);
    endShape(CLOSE);
  
  //Aqui é colocado a textura
    texture (textura_anos);
  //Aqui é criado uma forma, através dos vertex. No "vertex" são colocados as coordenadas dos vértices da forma (quadrado).
    beginShape();
  
      vertex (-parede_largura/2, -parede_altura/2, -parede_profundidade/2, 0, 0);
      vertex ( parede_largura/2, -parede_altura/2, -parede_profundidade/2, 1, 0);
      vertex ( parede_largura/2,  parede_altura/2, -parede_profundidade/2, 1, 1);
      vertex (-parede_largura/2,  parede_altura/2, -parede_profundidade/2, 0, 1);
    endShape(CLOSE);
 
     //parede transparente das categorias
    strokeWeight (0)
    fill (255,255,255,45)
    beginShape();
      vertex ( parede_largura/2, -parede_altura/2, -parede_profundidade/2, 0, 0);
      vertex ( parede_largura/2, -parede_altura/2,  parede_profundidade/2, 1, 0);
      vertex ( parede_largura/2,  parede_altura/2,  parede_profundidade/2, 1, 1);
      vertex ( parede_largura/2,  parede_altura/2, -parede_profundidade/2, 0, 1);
    endShape(CLOSE); 
  
  //Parede com indicação das categorias
    texture (textura_categorias);
    beginShape();
      vertex ( parede_largura/2, -parede_altura/2, -parede_profundidade/2, 0, 0);
      vertex ( parede_largura/2, -parede_altura/2,  parede_profundidade/2, 1, 0);
      vertex ( parede_largura/2,  parede_altura/2,  parede_profundidade/2, 1, 1);
      vertex ( parede_largura/2,  parede_altura/2, -parede_profundidade/2, 0, 1);
    endShape(CLOSE);
  
  pop();
  
  push();
    translate (x, y, z);
  
    angleMode(DEGREES);
    rotateY (45);
  //parede transparente do "chão" 
    strokeWeight (0)
    fill (255,255,255,75)
    beginShape();
      vertex (-parede_largura/2,  parede_altura/2, -parede_profundidade/2, 0, 0);
      vertex ( parede_largura/2,  parede_altura/2, -parede_profundidade/2, 1, 0);
      vertex ( parede_largura/2,  parede_altura/2,  parede_profundidade/2, 1, 1);
      vertex (-parede_largura/2,  parede_altura/2,  parede_profundidade/2, 0, 1);
    endShape(CLOSE);
  pop();
  
  drawData();
}

//
function importData()
{
  data_elements = [];
  // "for" - cria um loop que é útil para executar uma secção do código várias vezes.
  for (let r=0; r<data_table.getRowCount(); r++)
  {
    //Determinar como as constantes funcionam, com base na informação da tabela de dados.
    const ano = data_table.getString (r, "anos");
    const extensivo = data_table.getNum (r, "extensivo");
    const intensivo = data_table.getNum (r, "intensivo");
    const semiintensivo = data_table.getNum (r, "semiintensivo");
    const total = data_table.getNum (r, "total");
      
    
    data_elements[r] = new DataElement (ano, extensivo, intensivo, semiintensivo, total);
  }
}


function drawData()
{
  const x = 0;
  const y = height/12;
  const z = tamanho_referencia_canvas/data_table.getRowCount()*-4;
  
  
  push();
    translate (x, y, z);
  
    angleMode(DEGREES);
    rotateX (80);
    rotateZ (45);
  
    for (let i=0; i<data_table.getRowCount(); i++) 
    {
      data_elements[i].drawDataElement(i-2);
    }
  
  pop();
}

//"class" - cria e nomeia uma classe que é um modelo para a criação de objetos.
class DataElement
{
  constructor (ano, extensivo, intensivo, semiintensivo, total)
  {
    this.ano = ano;
    this.extensivo = extensivo;
    this.intensivo = intensivo;
    this.semiintensivo = semiintensivo;
    this.total = total;
  }
  
  drawDataElement (i)
  {
    this.spacing_x = tamanho_referencia_canvas/data_table.getRowCount()*2;
    this.spacing_y = tamanho_referencia_canvas/data_table.getRowCount()*i;
    //"noStroke" - Desativa o desenho do traço (contorno). Se noStroke() e noFill() forem chamados, nada será desenhado na tela.
    noStroke();
    
    push();
        translate (this.spacing_x*-1, this.spacing_y);
          fill (20, 20, 100);
          scale (map(this.extensivo, 7000, 14800, 0.3, 1));   
          rotateX (65)
          model(objeto3D);
    pop();
    
    push();
        translate (this.spacing_x*0+this.spacing_x/4, this.spacing_y);
          fill (55, 20, 200);
          scale (map(this.intensivo, 4000, 7500, 0.3, 1));
          rotateX (80)
          model(objeto3D);
    pop();
    
    push();
        translate (this.spacing_x*1, this.spacing_y);
          fill (20, 220, 245);
          scale (map(this.semiintensivo, 13500, 24300, 0.3, 1));
          rotateX (-65)
          model(objeto3D);
    pop();
    
  } 
}

function drawWords(x) {
// O text() function precisa de três parâmetros:
// O texto para escrever, a posição horizontal e a posição vertical
  textSize(tamanho_referencia_canvas/10)
  fill(255);
  text('Pesca em Portugal',tamanho_referencia_canvas/60,-250);
  
  textSize(tamanho_referencia_canvas/40)
  fill(255);
  text('Evolução da Produção da Aquicultura por tipo de Regime em Portugal',tamanho_referencia_canvas/60,200);
} 



