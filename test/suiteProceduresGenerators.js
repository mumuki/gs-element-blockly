gsSuite('Generadores de Procedimientos y Funciones', function() {

  gsTestCode('Procedimiento con parámetros',
  '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="procedures_defnoreturn"><mutation><arg name="valor1"></arg><arg name="otroValor"></arg></mutation><field name="NAME">hacer algo con parametros</field><comment pinned="false" h="80" w="160">Un comentario para el procedimiento</comment></block></xml>',
  `//
// Un comentario para el procedimiento
//
procedure HacerAlgoConParametros(valor1, otroValor) {
  Poner(otroValor)
  Mover(valor1)
}\n`);

  gsTestCode('Nombre de funciones',
  '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="procedures_defreturn"  x="55" y="60"><field name="NAME">hacer algo</field><comment pinned="false" h="80" w="160">Describe esta función...</comment></block></xml>',
  `//
// Describe esta función...
//
function hacerAlgo() {
  return ()
}\n`);

  gsTestCode('Función simple',
  '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Program"  deletable="false" movable="false" editable="false" x="30" y="30"></block><block type="procedures_defreturn"  x="89" y="140"><field name="NAME">miRojo</field><comment pinned="false" h="80" w="160">Describe esta función...</comment><value name="RETURN"><block type="ColorSelector" ><field name="ColorDropdown">Rojo</field></block></value></block></xml>',
  `//
// Describe esta función...
//
function miRojo() {
  return (Rojo)
}\n`);

  gsTestCode('Función completa',
  '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Program"  deletable="false" movable="false" editable="false" x="30" y="30"></block><block type="procedures_defreturn"  x="51" y="185"><field name="NAME">hayAlEste</field><comment pinned="false" h="80" w="160">Describe esta función...</comment><statement name="STACK"><block type="Mover" ><value name="DIRECCION"><block type="DireccionSelector" ><field name="DireccionDropdown">Este</field></block></value></block></statement><value name="RETURN"><block type="hayBolitas" ><value name="VALUE"><block type="ColorSelector" ><field name="ColorDropdown">Rojo</field></block></value></block></value></block></xml>',
  `//
// Describe esta función...
//
${declaration} ${name}() {
  Mover(Este)
  return (hayBolitas(Rojo))
}\n`);

  gsTestCode('Función completa con parámetros',
  '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Program"  deletable="false" movable="false" editable="false" x="30" y="30"></block><block type="procedures_defreturn"  x="51" y="185"><mutation><arg name="cantBolitas"></arg></mutation><field name="NAME">hayNAlEste</field><comment pinned="false" h="80" w="160">Describe esta función...</comment><statement name="STACK"><block type="Mover" ><value name="DIRECCION"><block type="DireccionSelector" ><field name="DireccionDropdown">Este</field></block></value></block></statement><value name="RETURN"><block type="OperadorDeComparacion" ><field name="RELATION">==</field><value name="arg1"><block type="nroBolitas" ><value name="VALUE"><block type="ColorSelector" ><field name="ColorDropdown">Rojo</field></block></value></block></value><value name="arg2"><block type="variables_get" ><mutation var="cantBolitas"></mutation></block></value></block></value></block></xml>',
  `//
// Describe esta función...
//
function hayNAlEste(cantBolitas) {
  Mover(Este)
  return(nroBolitas(Rojo)==cantBolitas)
}\n`);

});

