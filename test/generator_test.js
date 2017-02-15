suite('gs-element-blockly_generator', function() {
  var element;

  setup(function() {
    element = document.getElementById("gseb");
    element.cleanup();
  });

  teardown(function() {
    element.cleanup();
  });

  gsTestCode('Programa vacío',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Program" deletable="false" movable="false" editable="false" x="30" y="30"><statement name="program"></statement></block></xml>',
    'program {\n}');

  gsTestCode('Poner',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Poner"><value name="COLOR"><block type="Rojo"></block></value></block></xml>',
    `Poner(Rojo)\n`);

  gsTestCode('Sacar',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Sacar"><value name="COLOR"><block type="Verde"></block></value></block></xml>',
    `Sacar(Verde)\n`);

  gsTestCode('Mover',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Mover"><value name="DIRECCION"><block type="Oeste"></block></value></block></xml>',
    `Mover(Oeste)\n`);

  gsTestCode('IrAlBorde',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="IrAlBorde"><value name="DIRECCION"><block type="Norte"></block></value></block></xml>',
    `IrAlBorde(Norte)\n`);

  gsTestCode('VaciarTablero',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="VaciarTablero"></block></xml>',
    `VaciarTablero()\n`);

  gsTestCode('BOOM',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="BOOM"></block></xml>',
    `BOOM()\n`);

  gsTestCode('Procedimiento',
  '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="procedures_defnoreturn"><mutation><arg name="valor1"></arg><arg name="otroValor"></arg></mutation><field name="NAME">hacer algo con parametros</field><comment pinned="false" h="80" w="160">Un comentario para el procedimiento</comment></block></xml>',
  `/**
 * Un comentario para el procedimiento
 */
procedure HacerAlgoConParametros(valor1, otroValor) {
}\n`);

  gsTestCode('SiEntonces',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Program" deletable="false" movable="false" editable="false" x="30" y="30"><statement name="program"><block type="SiEntonces"><value name="condicion"><block type="True"></block></value><statement name="block"><block type="Poner"><value name="COLOR"><block type="Rojo"></block></value></block></statement></block></statement></block></xml>',
    `program {
  if (True) {
    Poner(Rojo)
  }
}`);

  gsTestCode('SiEntoncesSiNo',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Program" deletable="false" movable="false" editable="false" x="30" y="30"><statement name="program"><block type="SiEntoncesSiNo"><value name="condicion"><block type="True"></block></value><statement name="block1"><block type="Poner"><value name="COLOR"><block type="Rojo"></block></value></block></statement><statement name="block2"><block type="Sacar"><value name="COLOR"><block type="Verde"></block></value></block></statement></block></statement></block></xml>',
    `program {
  if (True) {
    Poner(Rojo)
  }
  else {
    Sacar(Verde)
  }
}`);

  gsTestCode('Repetir',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Program" deletable="false" movable="false" editable="false" x="30" y="30"><statement name="program"><block type="Repetir"><value name="count"><block type="math_number"><field name="NUM">5</field></block></value><statement name="block"><block type="Mover"><value name="DIRECCION"><block type="Este" id="wDQeQ%pLbF2m`O~hru+h"></block></value></block></statement></block></statement></block></xml>',
    `program {
  repeat(5) {
    Mover(Este)
  }
}`);

  gsTestCode('Llamada a procedimiento',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Program" deletable="false" movable="false" editable="false"><statement name="program"><block type="procedures_callnoreturn"><mutation name="hacer algo con"><arg name="x"></arg><arg name="y"></arg></mutation><value name="ARG0"><block type="Rojo"></block></value><value name="ARG1"><block type="Verde"></block></value></block></statement></block><block type="procedures_defnoreturn"><mutation><arg name="x"></arg><arg name="y"></arg></mutation><field name="NAME">hacer algo con</field><comment></comment></block></xml>',
    `procedure HacerAlgoCon(x, y) {
}


program {
  HacerAlgoCon(Rojo, Verde)
}`);

test('Procedimiento primitivo', function() {
  let element = document.getElementById("gseb");
  element.primitiveProcedures = ['Poner_FloresAl_'];
  element.workspaceXml = `<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Program" deletable="false" movable="false" editable="false" x="30" y="30"><statement name="program"><block type="Poner_FloresAl_"><value name="arg1"><block type="math_number"><field name="NUM">4</field></block></value><value name="arg2"><block type="Este"></block></value></block></statement></block></xml>`;
  assert.equal(element.generateCode(), `program {
  Poner_FloresAl_(4, Este)
}`);
});


});
