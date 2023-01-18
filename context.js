//Contexto
function context()
{
  
  background (20, 20, 100);
  
  textAlign(CENTER);
  drawWords(width);
  
  

  
function drawWords(x) {

  textSize(tamanho_referencia_canvas/25)
  fill(255, 255, 255);
  text('Pesca em Portugal',tamanho_referencia_canvas/100,-250);
  
  textSize(tamanho_referencia_canvas/50)
  fill(255, 255, 255);
  text('A pesca é um tópico de grande importância para a subsistência das populações ribeirinhas',tamanho_referencia_canvas/100,-180);
  text('como também é um setor estratégico no que concerne à alimentação e emprego dos portugueses.',tamanho_referencia_canvas/100,-160);
  text('Existem três regimes de produção, sendo elas:',tamanho_referencia_canvas/100,-140);
  

   
  textSize(tamanho_referencia_canvas/50)
  fill(255, 255, 255);
  text('O regime de produção extensivo: é o que faz uso exclusivo das condições naturais disponíveis.',tamanho_referencia_canvas/100,-100);
  text('Neste regime, a espécie a cultivar é capturada no meio natural ou tem origem em unidades de reprodução.',tamanho_referencia_canvas/100,-80);
  text('A produção efetua-se com recurso a alimentação exclusivamente natural.',tamanho_referencia_canvas/100,-60);
  
   text('O regime de produção semi-intensivo: neste recorre-se à reprodução artificial para a obtenção de ovos e juvenis, ',tamanho_referencia_canvas/100,-20);
  text('e durante a fase de engorda efetuam-se amostragens e calibragens frequentes para otimizar o crescimento',tamanho_referencia_canvas/100,0);
  text('o rendimento, recorrendo a alimento natural e a suplementos alimentares artificiais.',tamanho_referencia_canvas/100,20);
  
  text('No sistema intensivo todos os parâmetros de produção se encontram sob observação permanente.',tamanho_referencia_canvas/100,60);
  text('Para aumentar o rendimento recorre-se a calibragens e amostragens sucessivas,',tamanho_referencia_canvas/100,80);
  text('controlando-se a reprodução e o crescimento. Neste regime a espécie',tamanho_referencia_canvas/100,100);
  text('é alimentada recorrendo exclusivamente a alimento artificial.',tamanho_referencia_canvas/100,120);
  
  let nxt_scene_btn_x = width/50;
  let nxt_scene_btn_y = height/50;
  let nxt_scene_btn_w = 100;
  let nxt_scene_btn_h = 100;
  
  fill (200,200,200,0);
  rectMode (CENTER);
  noStroke();
  rect (nxt_scene_btn_x, nxt_scene_btn_y, nxt_scene_btn_w, nxt_scene_btn_h);
  
  if (mouseX > nxt_scene_btn_x-nxt_scene_btn_w && 
      mouseX < nxt_scene_btn_x+nxt_scene_btn_w && 
      mouseY > nxt_scene_btn_y-nxt_scene_btn_h && 
      mouseY < nxt_scene_btn_y+nxt_scene_btn_h && 
      mouseIsPressed === true && 
      mouseIsReleased === true)
  {
    scene = 3;
    mouseIsReleased = false;
  }
  
  }
} 