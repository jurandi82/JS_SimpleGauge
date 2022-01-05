// Parametros para uma barra de -100 a 100

function gaugeBar(seletor,n){
  conteudo = 
    `<svg width="300" height="100" viewbox="40 40 600 120" xmlns="http://www.w3.org/2000/svg">
   <g>
     <rect id="svg_1" height="40" width="50" y="50" x="050" stroke="#000" fill="#FFB27C"/>
     <rect id="svg_2" height="40" width="50" y="50" x="100" stroke="#000" fill="#FFB27C"/>
     <rect id="svg_3" height="40" width="50" y="50" x="150" stroke="#000" fill="#FFB27C"/>
     <rect id="svg_4" height="40" width="50" y="50" x="200" stroke="#000" fill="#FFB27C"/>
     <rect id="svg_5" height="40" width="50" y="50" x="250" stroke="#000" fill="#FFB27C"/>
     <rect id="svg_6" height="40" width="50" y="50" x="300" stroke="#000" fill="#FFFA8D"/>
     <rect id="svg_7" height="40" width="50" y="50" x="350" stroke="#000" fill="#FFFA8D"/>
     <rect id="svg_8" height="40" width="50" y="50" x="400" stroke="#000" fill="#FFFA8D"/>
     <rect id="svg_9" height="40" width="50" y="50" x="450" stroke="#000" fill="#B9FFCE"/>
     <rect id="svg_0" height="40" width="50" y="50" x="500" stroke="#000" fill="#B9FFCE"/>
     <text text-anchor="start" font-family="Noto Sans JP" font-size="16" id="svg_13" y="45" x="040" stroke="#000" fill="#000000">-100</text>
     <text text-anchor="start" font-family="Noto Sans JP" font-size="16" id="svg_14" y="45" x="240" stroke="#000" fill="#000000">-20 </text>
     <text text-anchor="start" font-family="Noto Sans JP" font-size="16" id="svg_15" y="45" x="190" stroke="#000" fill="#000000">-40 </text>
     <text text-anchor="start" font-family="Noto Sans JP" font-size="16" id="svg_16" y="45" x="090" stroke="#000" fill="#000000">-80 </text>
     <text text-anchor="start" font-family="Noto Sans JP" font-size="16" id="svg_17" y="45" x="140" stroke="#000" fill="#000000">-60 </text>
     <text text-anchor="start" font-family="Noto Sans JP" font-size="16" id="svg_18" y="45" x="345" stroke="#000" fill="#000000"> 20 </text>
     <text text-anchor="start" font-family="Noto Sans JP" font-size="16" id="svg_19" y="45" x="540" stroke="#000" fill="#000000">100 </text>
     <text text-anchor="start" font-family="Noto Sans JP" font-size="16" id="svg_20" y="45" x="495" stroke="#000" fill="#000000"> 80 </text>
     <text text-anchor="start" font-family="Noto Sans JP" font-size="16" id="svg_21" y="45" x="395" stroke="#000" fill="#000000"> 40 </text>
     <text text-anchor="start" font-family="Noto Sans JP" font-size="16" id="svg_22" y="45" x="445" stroke="#000" fill="#000000"> 60 </text>
     <text text-anchor="start" font-family="Noto Sans JP" font-size="16" id="svg_23" y="45" x="295" stroke="#000" fill="#000000">  0 </text>
  </g>
  <path id="seta" d="m290,107l11,-37l11,37-22,0z" stroke="#000" fill="#B6C7EA" transform="translate(${n*2.5},0)"/>
</svg>`;
  document.querySelector(seletor).innerHTML=conteudo;
}
