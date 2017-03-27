gsSuite('Generadores de Comandos', function() {
  gsTestCode('Programa vacío',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Program" deletable="false" movable="false" editable="false" x="30" y="30"><statement name="program"></statement></block></xml>',
    'program {\n}');

  gsTestCode('Poner',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Poner"><value name="COLOR"><block type="ColorSelector"><field name="ColorDropdown">Rojo</field></block></value></block></xml>',
    `Poner(Rojo)\n`);

  gsTestCode('Sacar',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Sacar"><value name="COLOR"><block type="ColorSelector"><field name="ColorDropdown">Verde</field></block></value></block></xml>',
    `Sacar(Verde)\n`);

  gsTestCode('Mover',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Mover"><value name="DIRECCION"><block type="DireccionSelector"><field name="DireccionDropdown">Oeste</field></block></value></block></xml>',
    `Mover(Oeste)\n`);

  gsTestCode('IrAlBorde',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="IrAlBorde"><value name="DIRECCION"><block type="DireccionSelector"><field name="DireccionDropdown">Norte</field></block></value></block></xml>',
    `IrAlBorde(Norte)\n`);

  gsTestCode('VaciarTablero',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="VaciarTablero"></block></xml>',
    `VaciarTablero()\n`);

  gsTestCode('BOOM',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="BOOM"></block></xml>',
    `BOOM("Ingresar motivo...")\n`);

  gsTestCode('Procedimiento',
  '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="procedures_defnoreturn"><mutation><arg name="valor1"></arg><arg name="otroValor"></arg></mutation><field name="NAME">hacer algo con parametros</field><comment pinned="false" h="80" w="160">Un comentario para el procedimiento</comment></block></xml>',
  `//
// Un comentario para el procedimiento
//
procedure HacerAlgoConParametros(valor1, otroValor) {
}\n`);

  gsTestCode('SiEntonces',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Program" deletable="false" movable="false" editable="false" x="30" y="30"><statement name="program"><block type="SiEntonces"><value name="condicion"><block type="BoolSelector"><field name="BoolDropdown">True</field></block></value><statement name="block"><block type="Poner"><value name="COLOR"><block type="ColorSelector"><field name="ColorDropdown">Rojo</field></block></value></block></statement></block></statement></block></xml>',
    `program {
  if (True) {
    Poner(Rojo)
  }
}`);

  gsTestCode('SiEntoncesSiNo',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Program" deletable="false" movable="false" editable="false" x="30" y="30"><statement name="program"><block type="SiEntoncesSiNo"><value name="condicion"><block type="BoolSelector"><field name="BoolDropdown">True</field></block></value><statement name="block1"><block type="Poner"><value name="COLOR"><block type="ColorSelector"><field name="ColorDropdown">Rojo</field></block></value></block></statement><statement name="block2"><block type="Sacar"><value name="COLOR"><block type="ColorSelector"><field name="ColorDropdown">Verde</field></block></value></block></statement></block></statement></block></xml>',
    `program {
  if (True) {
    Poner(Rojo)
  }
  else {
    Sacar(Verde)
  }
}`);

  gsTestCode('Repetir',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Program" deletable="false" movable="false" editable="false" x="30" y="30"><statement name="program"><block type="Repetir"><value name="count"><block type="math_number"><field name="NUM">5</field></block></value><statement name="block"><block type="Mover"><value name="DIRECCION"><block type="DireccionSelector"><field name="DireccionDropdown">Este</field></block></value></block></statement></block></statement></block></xml>',
    `program {
  repeat(5) {
    Mover(Este)
  }
}`);

  gsTestCode('Llamada a procedimiento',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Program" deletable="false" movable="false" editable="false"><statement name="program"><block type="procedures_callnoreturn"><mutation name="hacer algo con"><arg name="x"></arg><arg name="y"></arg></mutation><value name="ARG0"><block type="ColorSelector"><field name="ColorDropdown">Rojo</field></block></value><value name="ARG1"><block type="ColorSelector"><field name="ColorDropdown">Verde</field></block></value></block></statement></block><block type="procedures_defnoreturn"><mutation><arg name="x"></arg><arg name="y"></arg></mutation><field name="NAME">hacer algo con</field><comment></comment></block></xml>',
    `procedure HacerAlgoCon(x, y) {
}


program {
  HacerAlgoCon(Rojo, Verde)
}`);

  test('Procedimiento primitivo', function() {
    let element = document.getElementById("gseb");
    element.primitiveProcedures = ['Poner_FloresAl_'];
    element.workspaceXml = `<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Program" deletable="false" movable="false" editable="false" x="30" y="30"><statement name="program"><block type="Poner_FloresAl_"><value name="arg1"><block type="math_number"><field name="NUM">4</field></block></value><value name="arg2"><block type="DireccionSelector"><field name="DireccionDropdown">Este</field></block></value></block></statement></block></xml>`;
    assert.equal(element.generateCode(), `program {
  Poner_FloresAl_(4, Este)
}`);
});

test('Genera correctamente usando procedimientos primitivos', function() {
  let element = document.getElementById("gseb");
  element.primitiveProcedures = [ "IrAlProximoEstudiante", "DarCaramelo", "IrAlEscritorio", "ComerCaramelos", "RecolectarPapel"];
  element.workspaceXml = '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Program" id="{XiKDv/%.3{(~rx0EF~*" deletable="false" movable="false" editable="false" x="30" y="30"><statement name="program"><block type="procedures_callnoreturn" id="VX~YA}X|YG.ej0U5*)s+"><mutation name="Repartir caramelos"></mutation><next><block type="procedures_callnoreturn" id=":6V{C^`ucRTL%VLn[]L^"><mutation name="Recolectar papeles"></mutation></block></next></block></statement></block><block type="procedures_defnoreturn" id="7uQ8[(hgK$*j-$(gs0nG" x="29" y="157"><field name="NAME">Repartir caramelos</field><comment pinned="false" h="80" w="160">Describe el procedimiento...</comment><statement name="STACK"><block type="Repetir" id="FG|pBJ4r-~yJ`m_,rJQp"><value name="count"><block type="math_number" id="WL(,(B~+*[e*,zl76Gms"><field name="NUM">19</field></block></value><statement name="block"><block type="IrAlProximoEstudiante" id="w+[}Z~X+/OPx-smKg$K["><next><block type="DarCaramelo" id="@M`SO=EC!*PQntKvTK(Y"></block></next></block></statement><next><block type="IrAlEscritorio" id="v}#i$d=$=S|NNp8?8b(1"><next><block type="ComerCaramelos" id="~$R#ZL0*p3+D(y2U$u~I"></block></next></block></next></block></statement></block><block type="procedures_defnoreturn" id="l!UoPXA~5R%umTChNj5d" x="294" y="155"><field name="NAME">Recolectar papeles</field><comment pinned="false" h="80" w="160">Describe el procedimiento...</comment><statement name="STACK"><block type="Repetir" id="%b)*!nUW/o8Cja|{KCh:"><value name="count"><block type="math_number" id="^;8gt/7ifqTNu;6..aty"><field name="NUM">19</field></block></value><statement name="block"><block type="IrAlProximoEstudiante" id="aY3qgGQ+c3_4W#Tex(jj"><next><block type="RecolectarPapel" id="Lx??!jmx8|Xyp1OFg$)k"></block></next></block></statement><next><block type="IrAlEscritorio" id=";Ne$)I+hI[SK`N:H1?,F"></block></next></block></statement></block></xml>';
  assert.equal(element.generateCode(), `//
// Describe el procedimiento...
//
procedure RepartirCaramelos() {
  repeat(19) {
    IrAlProximoEstudiante()
    DarCaramelo()
  }
  IrAlEscritorio()
  ComerCaramelos()
}

//
// Describe el procedimiento...
//
procedure RecolectarPapeles() {
  repeat(19) {
    IrAlProximoEstudiante()
    RecolectarPapel()
  }
  IrAlEscritorio()
}


program {
  RepartirCaramelos()
  RecolectarPapeles()
}`);
});

    gsTestCode('Asignar variable',
      '<xml><block type="Program"><statement name="program"><block type="Asignar"><field name="varName">x</field><value name="varValue"><block type="DireccionSelector"><field name="DireccionDropdown">Este</field></block></value><next><block type="Mover"><value name="DIRECCION"><block type="variables_get"><field name="VAR">x</field></block></value></block></next></block></statement></block></xml>',
      `program {
  x := Este
  Mover(x)
}`);


});
