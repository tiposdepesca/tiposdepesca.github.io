//Introdução
function intro()
{
  //Fundo
  background (255, 255, 255);
  
  //Texto
  textAlign(CENTER);
  drawWords(width);
  
  //Especificações do modelo 3D. O push (); e pop(); servem para salvar as definições anteriores.
  push();
  scale(1);
  rotateX(frameCount * -0.01);
  rotateY(frameCount * -0.01);
  rotateZ(frameCount * 0.01);
  normalMaterial(); // For effect
  model(objeto3D);
  pop();

  //Função para escrever o texto.
  function drawWords(x) {
  textSize(tamanho_referencia_canvas/10)
  fill(20, 20, 100);
  text('Pesca em Portugal',tamanho_referencia_canvas/60,-250);
  
  textSize(tamanho_referencia_canvas/30)
  fill(20, 20, 100);
  text('Laboratório de Projeto I',tamanho_referencia_canvas/60,-150);
  
   textSize(tamanho_referencia_canvas/30)
  fill(20, 20, 100);
  text('Prof.º Marco Heleno',tamanho_referencia_canvas/60,-120);
  
  textSize(tamanho_referencia_canvas/40)
  fill(20, 20, 100);
  text('Projeto realizado pelos alunos Maria Juvandes e André Ribeiro',tamanho_referencia_canvas/60,200);
    
    }
  
  //Criação de coordenadas para o botão invisível, para servir de gatilho.
  let nxt_scene_btn_x = width/50;
  let nxt_scene_btn_y = height/50;
  let nxt_scene_btn_w = 100;
  let nxt_scene_btn_h = 100;
  
  fill (200,200,200,0);
  rectMode (CENTER);
  noStroke();
  rect (nxt_scene_btn_x, nxt_scene_btn_y, nxt_scene_btn_w, nxt_scene_btn_h);
  
  //Condição de que se clicar, passa à próxima "scene".
  if (mouseX > nxt_scene_btn_x-nxt_scene_btn_w && 
      mouseX < nxt_scene_btn_x+nxt_scene_btn_w && 
      mouseY > nxt_scene_btn_y-nxt_scene_btn_h && 
      mouseY < nxt_scene_btn_y+nxt_scene_btn_h && 
      mouseIsPressed === true && 
      mouseIsReleased === true)
  {
    scene = 2;
    mouseIsReleased = false;
  }
    
} 