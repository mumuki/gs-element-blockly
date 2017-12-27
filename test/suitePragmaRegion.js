gsSuite('Genera usando pragma REGION', function() {

  // --------------------------------------------------
  // ------- EXPRESIONES ------------------------------
  // --------------------------------------------------

	gsTestCode('&& se genera bien',
  '<xml><block type="OperadorLogico" id="and"><field name="OPERATOR">&amp;&amp;</field><value name="arg1"><block type="BoolSelector" id="true"><field name="BoolDropdown">True</field></block></value><value name="arg2"><block type="BoolSelector" id="false"><field name="BoolDropdown">False</field></block></value></block></xml>',
  '/@BEGIN_REGION@and@//@BEGIN_REGION@true@/True/@END_REGION@/ && /@BEGIN_REGION@false@/False/@END_REGION@//@END_REGION@/',
  {withRegions: true}
);
gsTestCode('|| se genera bien',
  '<xml><block type="OperadorLogico" id="or"><field name="OPERATOR">||</field><value name="arg1"><block type="BoolSelector" id="false"><field name="BoolDropdown">False</field></block></value><value name="arg2"><block type="BoolSelector" id="true"><field name="BoolDropdown">True</field></block></value></block></xml>',
  '/@BEGIN_REGION@or@//@BEGIN_REGION@false@/False/@END_REGION@/ || /@BEGIN_REGION@true@/True/@END_REGION@//@END_REGION@/',
  {withRegions: true}
);
gsTestCode('|| se genera  con paréntesis',
  '<xml><block type="OperadorLogico" id="and"><field name="OPERATOR">&amp;&amp;</field><value name="arg1"><block type="BoolSelector" id="true1"><field name="BoolDropdown">True</field></block></value><value name="arg2"><block type="OperadorLogico" id="or"><field name="OPERATOR">||</field><value name="arg1"><block type="BoolSelector" id="true2"><field name="BoolDropdown">True</field></block></value><value name="arg2"><block type="BoolSelector" id="true3"><field name="BoolDropdown">True</field></block></value></block></value></block></xml>',
  '/@BEGIN_REGION@and@//@BEGIN_REGION@true1@/True/@END_REGION@/ && (/@BEGIN_REGION@or@//@BEGIN_REGION@true2@/True/@END_REGION@/ || /@BEGIN_REGION@true3@/True/@END_REGION@//@END_REGION@/)/@END_REGION@/',
  {withRegions: true}
);
gsTestCode('Anidación de || dentro de && provoca paréntesis',
  '<xml><block type="OperadorLogico" id="or"><field name="OPERATOR">&amp;&amp;</field><value name="arg1"><block type="BoolSelector" id="true1"><field name="BoolDropdown">True</field></block></value><value name="arg2"><block type="OperadorLogico" id="or"><field name="OPERATOR">||</field><value name="arg1"><block type="BoolSelector" id="true2"><field name="BoolDropdown">True</field></block></value><value name="arg2"><block type="BoolSelector" id="true"><field name="BoolDropdown">True</field></block></value></block></value></block></xml>',
  'True && (True || True)',
  {withRegions: true}
);
gsTestCode('Anidación de && dentro de || no provoca paréntesis',
  '<xml><block type="OperadorLogico"><field name="OPERATOR">||</field><value name="arg1"><block type="OperadorLogico"><field name="OPERATOR">&amp;&amp;</field><value name="arg1"><block type="BoolSelector"><field name="BoolDropdown">True</field></block></value><value name="arg2"><block type="BoolSelector"><field name="BoolDropdown">True</field></block></value></block></value><value name="arg2"><block type="BoolSelector"><field name="BoolDropdown">True</field></block></value></block></xml>',
  'True && True || True',
  {withRegions: true}
);

gsTestCode('hayBolitas',
  '<xml><block type="hayBolitas"><value name="VALUE"><block type="ColorSelector"><field name="ColorDropdown">Rojo</field></block></value></block></xml>',
  'hayBolitas(Rojo)',
  {withRegions: true}
);

gsTestCode('nroBolitas',
  '<xml><block type="nroBolitas"><value name="VALUE"><block type="ColorSelector"><field name="ColorDropdown">Rojo</field></block></value></block></xml>',
  'nroBolitas(Rojo)',
  {withRegions: true}
);

gsTestCode('puedeMover',
  '<xml><block type="puedeMover"><value name="VALUE"><block type="DireccionSelector"><field name="DireccionDropdown">Este</field></block></value></block></xml>',
  'puedeMover(Este)',
  {withRegions: true}
);

gsTestCode('siguiente',
  '<xml><block type="siguiente"><value name="VALUE"><block type="DireccionSelector"><field name="DireccionDropdown">Este</field></block></value></block></xml>',
  'siguiente(Este)',
  {withRegions: true}
);

gsTestCode('previo',
  '<xml><block type="previo"><value name="VALUE"><block type="DireccionSelector"><field name="DireccionDropdown">Este</field></block></value></block></xml>',
  'previo(Este)',
  {withRegions: true}
);

gsTestCode('opuesto',
  '<xml><block type="opuesto"><value name="VALUE"><block type="DireccionSelector"><field name="DireccionDropdown">Este</field></block></value></block></xml>',
  'opuesto(Este)',
  {withRegions: true}
);

gsTestCode('Funciones',
'<xml xmlns="http://www.w3.org/1999/xhtml"><block type="procedures_defreturn" id="f1" x="18" y="-49"><field name="NAME">devolver algun valor</field><comment pinned="false" h="80" w="160">Comentario de lo que devuelve</comment><statement name="STACK"><block type="Mover" id="mover"><value name="DIRECCION"><block type="DireccionSelector" id="este"><field name="DireccionDropdown">Este</field></block></value></block></statement><value name="RETURN"><block type="ColorSelector" id="rojo"><field name="ColorDropdown">Rojo</field></block></value></block><block type="Program" id="program" deletable="false" movable="false" editable="false" x="30" y="30"><statement name="program"><block type="Poner" id="poner"><value name="COLOR"><block type="procedures_callreturn" id="f1"><mutation name="devolver algun valor"></mutation></block></value></block></statement></block></xml>',
  `//
// Comentario de lo que devuelve
//
function devolverAlgunValor() {
Mover(Este)

return (Rojo)
}


program {
Poner(devolverAlgunValor())
}`,
{withRegions: true});

test('Funciones primitivas', function() {
  let element = document.getElementById("gseb");
  element.primitiveFunctions = ['hayFlores_en_'];
  element.workspaceXml = `<xml><block type="hayFlores_en_"><value name="arg1"><block type="ColorSelector"><field name="ColorDropdown">Rojo</field></block></value><value name="arg2"><block type="DireccionSelector"><field name="DireccionDropdown">Este</field></block></value></block></xml>`;
  assert.equal(element.generateCode({withRegions: true}), `hayFlores_en_(Rojo, Este)`);
});


test('Genera correctamente usando funciones primitivas', function() {
  let element = document.getElementById("gseb");
  element.primitiveFunctions = ['hayFlores_en_', 'dondeEsta_'];
  element.workspaceXml = `<xml>
  <block type="Program"><statement name="program">
    <block type="AlternativaSimple">
      <value name="condicion">
        <block type="hayFlores_en_">
          <value name="arg1"><block type="ColorSelector"><field name="ColorDropdown">Rojo</field></block></value>
          <value name="arg2"><block type="DireccionSelector"><field name="DireccionDropdown">Este</field></block></value>
        </block>
      </value>
      <statement name="block">
        <block type="Mover">
          <value name="DIRECCION">
            <block type="dondeEsta_">
              <value name="arg1"><block type="ColorSelector"><field name="ColorDropdown">Rojo</field></block></value>
            </block>
          </value>
        </block>
      </statement>
    </block>
  </statement>
</block>
</xml>`;

  assert.equal(element.generateCode({withRegions: true}), `program {
if (hayFlores_en_(Rojo, Este)) {
  Mover(dondeEsta_(Rojo))
}
}`);
});

gsTestCode('Expresión Completar',
  '<xml><block type="ExpresionCompletar"></block></xml>',
  'boom("El programa todavía no está completo")',
  {withRegions: true}
);

// --------------------------------------------------
// ------- COMANDOS ---------------------------------
// --------------------------------------------------

  gsTestCode('Programa vacío',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Program" id="1" deletable="false" movable="false" editable="false" x="30" y="30"><statement name="program"></statement></block></xml>',
    '/@BEGIN_REGION@1@/program {\n}/@END_REGION@/',
    {withRegions: true});

  gsTestCode('Poner',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Poner"><value name="COLOR"><block type="ColorSelector"><field name="ColorDropdown">Rojo</field></block></value></block></xml>',
    `Poner(Rojo)\n`,
    {withRegions: true});

  gsTestCode('Sacar',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Sacar"><value name="COLOR"><block type="ColorSelector"><field name="ColorDropdown">Verde</field></block></value></block></xml>',
    `Sacar(Verde)\n`,
    {withRegions: true});

  gsTestCode('Mover',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Mover"><value name="DIRECCION"><block type="DireccionSelector"><field name="DireccionDropdown">Oeste</field></block></value></block></xml>',
    `Mover(Oeste)\n`,
    {withRegions: true});

  gsTestCode('IrAlBorde',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="IrAlBorde"><value name="DIRECCION"><block type="DireccionSelector"><field name="DireccionDropdown">Norte</field></block></value></block></xml>',
    `IrAlBorde(Norte)\n`,
    {withRegions: true});

  gsTestCode('VaciarTablero',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="VaciarTablero"></block></xml>',
    `VaciarTablero()\n`,
    {withRegions: true});

  gsTestCode('BOOM',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="BOOM"></block></xml>',
    `BOOM("Ingresar motivo...")\n`,
    {withRegions: true});

  gsTestCode('BOOM sanitiza comillas',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="BOOM"><field name="boomDescription">Chor"lito</field></block></xml>',
    `BOOM("Chor'lito")\n`,
    {withRegions: true});

  gsTestCode('BOOM omite comillas finales e iniciales',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="BOOM"><field name="boomDescription">""Chor"lito"</field></block></xml>',
    `BOOM("'Chor'lito")\n`,
    {withRegions: true});

  gsTestCode('Procedimiento',
  '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="procedures_defnoreturn"><mutation><arg name="valor1"></arg><arg name="otroValor"></arg></mutation><field name="NAME">hacer algo con parametros</field><comment pinned="false" h="80" w="160">Un comentario para el procedimiento</comment></block></xml>',
  `//
// Un comentario para el procedimiento
//
procedure HacerAlgoConParametros(valor1, otroValor) {
}\n`,
{withRegions: true});

  gsTestCode('Procedimiento sin parámetros',
  '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="procedures_defnoreturnnoparams" id="p1" x="30" y="-53"><field name="NAME">Hacer algo</field><comment pinned="false" h="80" w="160">Desc del procedure</comment><statement name="STACK"><block type="Poner" id="poner"></block></statement></block><block type="Program" id="program" deletable="false" movable="false" editable="false" x="30" y="30"><statement name="program"><block type="procedures_callnoreturnnoparams" id="p1"><mutation name="Hacer algo"></mutation></block></statement></block></xml>',
    `//
// Desc del procedure
//
procedure HacerAlgo() {
  Poner()
}


program {
  HacerAlgo()
}`,
{withRegions: true});

  gsTestCode('Función pura',
  '<xml xmlns="http://www.w3.org/1999/xhtml"><variables></variables><block type="Program" id="program" x="30" y="30"><statement name="program"><block type="Poner" id="poner"><value name="COLOR"><block type="procedures_callreturnsimple" id="f1"><mutation name="devolver algo"></mutation></block></value></block></statement></block><block type="procedures_defreturnsimple" id="cf1" x="29" y="153"><mutation statements="false"></mutation><field name="NAME">devolver algo</field><value name="RETURN"><block type="ColorSelector" id="rojo"><field name="ColorDropdown">Rojo</field></block></value></block></xml>',
    `function devolverAlgo() {

  return (Rojo)
}


program {
  Poner(devolverAlgo())
}`);

  gsTestCode('Función pura parametrizada',
  '<xml xmlns="http://www.w3.org/1999/xhtml"><variables></variables><block type="procedures_defreturnsimplewithparams" id="f1" x="75" y="25"><mutation statements="false"><arg name="x"></arg></mutation><field name="NAME">doble</field><value name="RETURN"><block type="OperadorNumerico" id="plus"><field name="OPERATOR">+</field><value name="arg1"><block type="variables_get" id="x"><mutation var="x"></mutation></block></value><value name="arg2"><block type="variables_get" id="x2"><mutation var="x"></mutation></block></value></block></value></block><block type="Program" id="program" deletable="false" x="44" y="155"><mutation timestamp="1509516775623"></mutation><statement name="program"><block type="RepeticionSimple" id="repeat"><value name="count"><block type="procedures_callreturnsimplewithparams" id="cf1"><mutation name="doble"><arg name="x"></arg></mutation><value name="ARG0"><block type="math_number" id="2"><field name="NUM">2</field></block></value></block></value><statement name="block"><block type="Poner" id="poner"><value name="COLOR"><block type="ColorSelector" id="rojo"><field name="ColorDropdown">Rojo</field></block></value></block></statement></block></statement></block></xml>',
    `function doble(x) {

  return (x + x)
}


program {
  repeat(doble(2)) {
    Poner(Rojo)
  }
}`,
{withRegions: true});

  gsTestCode('AlternativaSimple',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Program" deletable="false" movable="false" editable="false" x="30" y="30"><statement name="program"><block type="AlternativaSimple"><value name="condicion"><block type="BoolSelector"><field name="BoolDropdown">True</field></block></value><statement name="block"><block type="Poner"><value name="COLOR"><block type="ColorSelector"><field name="ColorDropdown">Rojo</field></block></value></block></statement></block></statement></block></xml>',
    `program {
  if (True) {
    Poner(Rojo)
  }
}`,
{withRegions: true});

  gsTestCode('AlternativaCompleta',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><variables></variables><block type="Program" id="program" deletable="false" movable="false" editable="false" x="30" y="30"><mutation timestamp="1510689378113"></mutation><statement name="program"><block type="AlternativaCompleta" id="if"><mutation else="1"></mutation><value name="condicion"><block type="BoolSelector" id="true"><field name="BoolDropdown">True</field></block></value><statement name="block1"><block type="Poner" id="poner"><value name="COLOR"><block type="ColorSelector" id="rojo"><field name="ColorDropdown">Rojo</field></block></value></block></statement><statement name="block2"><block type="Sacar" id="sacar"><value name="COLOR"><block type="ColorSelector" id="verde"><field name="ColorDropdown">Verde</field></block></value></block></statement></block></statement></block></xml>',
    `program {
  if (True) {
    Poner(Rojo)
  } else {
    Sacar(Verde)
  }
}`,
{withRegions: true});

  gsTestCode('AlternativaCompletaConElseIf',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><variables></variables><block type="Program" id="program" deletable="false" x="30" y="30"><mutation timestamp="1510202309441"></mutation><statement name="program"><block type="AlternativaCompleta" id="if"><mutation elseif="2" else="1"></mutation><value name="condicion"><block type="puedeMover" id="puedeMover"><value name="VALUE"><block type="DireccionSelector" id="este"><field name="DireccionDropdown">Este</field></block></value></block></value><statement name="block1"><block type="Poner" id="poner"><value name="COLOR"><block type="ColorSelector" id="rojo"><field name="ColorDropdown">Rojo</field></block></value></block></statement><value name="IF1"><block type="puedeMover" id="puedeMover"><value name="VALUE"><block type="DireccionSelector" id="oeste"><field name="DireccionDropdown">Oeste</field></block></value></block></value><statement name="DO1"><block type="Sacar" id="sacar"><value name="COLOR"><block type="ColorSelector" id="rojo"><field name="ColorDropdown">Rojo</field></block></value></block></statement><value name="IF2"><block type="puedeMover" id="puedeMover"><value name="VALUE"><block type="DireccionSelector" id="sur"><field name="DireccionDropdown">Sur</field></block></value></block></value><statement name="block2"><block type="Mover" id="mover"><value name="DIRECCION"><block type="DireccionSelector" id="este"><field name="DireccionDropdown">Este</field></block></value></block></statement></block></statement></block></xml>',
    `program {
  if (puedeMover(Este)) {
    Poner(Rojo)
  } else if (puedeMover(Oeste)) {
    Sacar(Rojo)
  } else if (puedeMover(Sur)) {
  } else {
    Mover(Este)
  }
}`,
{withRegions: true});

  gsTestCode('Repetición Simple',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Program" deletable="false" movable="false" editable="false" x="30" y="30"><statement name="program"><block type="RepeticionSimple"><value name="count"><block type="math_number"><field name="NUM">5</field></block></value><statement name="block"><block type="Mover"><value name="DIRECCION"><block type="DireccionSelector"><field name="DireccionDropdown">Este</field></block></value></block></statement></block></statement></block></xml>',
    `program {
  repeat(5) {
    Mover(Este)
  }
}`,
{withRegions: true});

  gsTestCode('Llamada a procedimiento',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Program" deletable="false" movable="false" editable="false"><statement name="program"><block type="procedures_callnoreturn"><mutation name="hacer algo con"><arg name="x"></arg><arg name="y"></arg></mutation><value name="ARG0"><block type="ColorSelector"><field name="ColorDropdown">Rojo</field></block></value><value name="ARG1"><block type="ColorSelector"><field name="ColorDropdown">Verde</field></block></value></block></statement></block><block type="procedures_defnoreturn"><mutation><arg name="x"></arg><arg name="y"></arg></mutation><field name="NAME">hacer algo con</field><comment></comment></block></xml>',
    `procedure HacerAlgoCon(x, y) {
}


program {
  HacerAlgoCon(Rojo, Verde)
}`,
{withRegions: true});

  test('Procedimiento primitivo', function() {
    let element = document.getElementById("gseb");
    element.primitiveProcedures = ['Poner_FloresAl_'];
    element.workspaceXml = `<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Program" deletable="false" movable="false" editable="false" x="30" y="30"><statement name="program"><block type="Poner_FloresAl_"><value name="arg1"><block type="math_number"><field name="NUM">4</field></block></value><value name="arg2"><block type="DireccionSelector"><field name="DireccionDropdown">Este</field></block></value></block></statement></block></xml>`;
    assert.equal(element.generateCode({withRegions: true}), `program {
  Poner_FloresAl_(4, Este)
}`);
});

    gsTestCode('Asignacion variable',
      '<xml><block type="Program"><statement name="program"><block type="Asignacion"><field name="varName">x</field><value name="varValue"><block type="ColorSelector"><field name="ColorDropdown">Rojo</field></block></value><next><block type="Poner"><value name="COLOR"><block type="variables_get"><mutation var="x"></mutation></block></value></block></next></block></statement></block></xml>',
      `program {
  x := Rojo
  Poner(x)
}`,
{withRegions: true});

  gsTestCode('Programa interactivo simple',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><variables></variables><block type="InteractiveProgram" id="iprog" deletable="false" x="-7" y="25"><mutation timestamp="1509521036701"></mutation><statement name="interactiveprogram"><block type="InteractiveKeyBinding" id="kb1"><mutation modifierscount="0"></mutation><field name="InteractiveBindingDropdownKey">ARROW_LEFT</field><statement name="block"><block type="Poner" id="poner1"><value name="COLOR"><block type="ColorSelector" id="rojo1"><field name="ColorDropdown">Rojo</field></block></value></block></statement><next><block type="InteractiveLetterBinding" id="kb2"><mutation modifierscount="3"></mutation><field name="InteractiveBindingDropdownKey">A</field><field name="d1">SHIFT</field><field name="d2">CTRL</field><field name="d3">ALT</field><statement name="block"><block type="Poner" id="poner2"><value name="COLOR"><block type="ColorSelector" id="verde2"><field name="ColorDropdown">Verde</field></block></value></block></statement><next><block type="InteractiveNumberBinding" id="kb3"><mutation modifierscount="2"></mutation><field name="InteractiveBindingDropdownKey">1</field><field name="d1">CTRL</field><field name="d2">SHIFT</field><statement name="block"><block type="Poner" id="poner3"><value name="COLOR"><block type="ColorSelector" id="azul3"><field name="ColorDropdown">Azul</field></block></value></block></statement></block></next></block></next></block></statement></block></xml>',
    `interactive program {
  K_ARROW_LEFT -> {
    Poner(Rojo)

  }
  K_CTRL_ALT_SHIFT_A -> {
    Poner(Verde)

  }
  K_CTRL_SHIFT_1 -> {
    Poner(Azul)

  }
}`,
{withRegions: true});

  gsTestCode('Programa interactivo con init y timeout',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><variables></variables><block type="InteractiveProgram" id="iprogram" deletable="false" x="67" y="8"><mutation init="true" timeout="500" timestamp="1509521133888"></mutation><statement name="interactiveprogram"><block type="InteractiveKeyBinding" id="kb1"><mutation modifierscount="0"></mutation><field name="InteractiveBindingDropdownKey">TAB</field><statement name="block"><block type="Poner" id="poner1"><value name="COLOR"><block type="ColorSelector" id="negro1"><field name="ColorDropdown">Negro</field></block></value></block></statement></block></statement><statement name="init"><block type="Poner" id="poner2"><value name="COLOR"><block type="ColorSelector" id="rojo2"><field name="ColorDropdown">Rojo</field></block></value></block></statement><statement name="timeout"><block type="Poner" id="poner3"><value name="COLOR"><block type="ColorSelector" id="verde3"><field name="ColorDropdown">Verde</field></block></value></block></statement></block></xml>',
    `interactive program {
INIT -> {
  Poner(Rojo)

}
  K_TAB -> {
    Poner(Negro)

  }
TIMEOUT(500) -> {
  Poner(Verde)

}
}`,
{withRegions: true});

  gsTestCode('Comando Completar',
      '<xml><block type="Program"><statement name="program"><block type="ComandoCompletar"><next><block type="Poner"><value name="COLOR"><block type="ColorSelector"><field name="ColorDropdown">Rojo</field></block></value></block></next></block></statement></block></xml>',
      `program {
  BOOM("El programa todavía no está completo")
  Poner(Rojo)
}`,
{withRegions: true});

});
