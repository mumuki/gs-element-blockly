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
  '<xml><block type="OperadorLogico" id="and"><field name="OPERATOR">&amp;&amp;</field><value name="arg1"><block type="BoolSelector" id="true1"><field name="BoolDropdown" id="true2">True</field></block></value><value name="arg2"><block type="OperadorLogico" id="or"><field name="OPERATOR">||</field><value name="arg1"><block type="BoolSelector" id="true3"><field name="BoolDropdown">True</field></block></value><value name="arg2"><block type="BoolSelector"><field name="BoolDropdown">True</field></block></value></block></value></block></xml>',
  '/@BEGIN_REGION@and@//@BEGIN_REGION@true1@/True/@END_REGION@/ && (/@BEGIN_REGION@or@//@BEGIN_REGION@true2@/True/@END_REGION@/ || /@BEGIN_REGION@true3@/True/@END_REGION@//@END_REGION@/)/@END_REGION@/',
  {withRegions: true}
);
gsTestCode('Anidación de || dentro de && provoca paréntesis',
  '<xml><block type="OperadorLogico"><field name="OPERATOR">&amp;&amp;</field><value name="arg1"><block type="BoolSelector"><field name="BoolDropdown">True</field></block></value><value name="arg2"><block type="OperadorLogico"><field name="OPERATOR">||</field><value name="arg1"><block type="BoolSelector"><field name="BoolDropdown">True</field></block></value><value name="arg2"><block type="BoolSelector"><field name="BoolDropdown">True</field></block></value></block></value></block></xml>',
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
'<xml xmlns="http://www.w3.org/1999/xhtml"><block type="procedures_defreturn" id="+gqlq+YuvCEMmS6F61{-" x="18" y="-49"><field name="NAME">devolver algun valor</field><comment pinned="false" h="80" w="160">Comentario de lo que devuelve</comment><statement name="STACK"><block type="Mover" id="NCfiiVVe_B-`PMM1+kD^"><value name="DIRECCION"><block type="DireccionSelector" id="Dv4N-v/Zlt~n!R|IJtWe"><field name="DireccionDropdown">Este</field></block></value></block></statement><value name="RETURN"><block type="ColorSelector" id="g:f8pLgHC1}i]ou!MFq1"><field name="ColorDropdown">Rojo</field></block></value></block><block type="Program" id="twZ(|C[;{.q7Y=]W*iNv" deletable="false" movable="false" editable="false" x="30" y="30"><statement name="program"><block type="Poner" id="jgtnboH^Cx^^UT0%!#j`"><value name="COLOR"><block type="procedures_callreturn" id="5O:f6l?E-j8LT{YTjr;_"><mutation name="devolver algun valor"></mutation></block></value></block></statement></block></xml>',
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
  '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="procedures_defnoreturnnoparams" id="7.WqYnDK,%AyDkn]|W[A" x="30" y="-53"><field name="NAME">Hacer algo</field><comment pinned="false" h="80" w="160">Desc del procedure</comment><statement name="STACK"><block type="Poner" id="CAG,1GO#L(~dKF(`l3Pg"></block></statement></block><block type="Program" id="mrH;=*5x58d@d@)e6_%D" deletable="false" movable="false" editable="false" x="30" y="30"><statement name="program"><block type="procedures_callnoreturnnoparams" id="##h_(l?bVZ3ib~o`|j,F"><mutation name="Hacer algo"></mutation></block></statement></block></xml>',
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
  '<xml xmlns="http://www.w3.org/1999/xhtml"><variables></variables><block type="Program" id="MT6=3~!F@#2M!|~{}J[_" x="30" y="30"><statement name="program"><block type="Poner" id="^pe-vNTX(`E3_WS*i)C("><value name="COLOR"><block type="procedures_callreturnsimple" id="?cZ6M@Tb[z=sfj)pVtRV"><mutation name="devolver algo"></mutation></block></value></block></statement></block><block type="procedures_defreturnsimple" id="(0xJ:(i7EX]6`l[#!pb," x="29" y="153"><mutation statements="false"></mutation><field name="NAME">devolver algo</field><value name="RETURN"><block type="ColorSelector" id="zy0ET}dx{(l_/@ysONL("><field name="ColorDropdown">Rojo</field></block></value></block></xml>',
    `function devolverAlgo() {

  return (Rojo)
}


program {
  Poner(devolverAlgo())
}`);

  gsTestCode('Función pura parametrizada',
  '<xml xmlns="http://www.w3.org/1999/xhtml"><variables></variables><block type="procedures_defreturnsimplewithparams" id="OMx*|y/u93_;{)/:ccu#" x="75" y="25"><mutation statements="false"><arg name="x"></arg></mutation><field name="NAME">doble</field><value name="RETURN"><block type="OperadorNumerico" id="A?32z4OOoj7fhG$ZcR5F"><field name="OPERATOR">+</field><value name="arg1"><block type="variables_get" id=":,nnUDn1M#f3Z`U9BX,K"><mutation var="x"></mutation></block></value><value name="arg2"><block type="variables_get" id="yXc3JLm.]viK4$~+Xw]r"><mutation var="x"></mutation></block></value></block></value></block><block type="Program" id="GA843XT.)sE1~C[Non9w" deletable="false" x="44" y="155"><mutation timestamp="1509516775623"></mutation><statement name="program"><block type="RepeticionSimple" id="h_+ZaI_b2XipY3U,nDX("><value name="count"><block type="procedures_callreturnsimplewithparams" id="r93jBy6n6qGV_u1{8h1B"><mutation name="doble"><arg name="x"></arg></mutation><value name="ARG0"><block type="math_number" id="wu!JBccEoGwX)=+QNa@5"><field name="NUM">2</field></block></value></block></value><statement name="block"><block type="Poner" id="fX2WzGga]gNg!#0ImYE^"><value name="COLOR"><block type="ColorSelector" id="G5=n=ZS|%Z=nl7:,6s_="><field name="ColorDropdown">Rojo</field></block></value></block></statement></block></statement></block></xml>',
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
    '<xml xmlns="http://www.w3.org/1999/xhtml"><variables></variables><block type="Program" id=".)lJS!4;?t(uzqy3pPHG" deletable="false" movable="false" editable="false" x="30" y="30"><mutation timestamp="1510689378113"></mutation><statement name="program"><block type="AlternativaCompleta" id="`g!0-)%FA;`PH3_x=?!A"><mutation else="1"></mutation><value name="condicion"><block type="BoolSelector" id="-*w`VB](Kef(=k%f!nar"><field name="BoolDropdown">True</field></block></value><statement name="block1"><block type="Poner" id="gK{ipr6+XOqbEq_Xg1J9"><value name="COLOR"><block type="ColorSelector" id="hV%u1T/Mu?;9wL#eB_^Z"><field name="ColorDropdown">Rojo</field></block></value></block></statement><statement name="block2"><block type="Sacar" id="~B};/=rl_?UGOC)h+`M`"><value name="COLOR"><block type="ColorSelector" id="/]eSqaffOw8P%z|wD2^I"><field name="ColorDropdown">Verde</field></block></value></block></statement></block></statement></block></xml>',
    `program {
  if (True) {
    Poner(Rojo)
  } else {
    Sacar(Verde)
  }
}`,
{withRegions: true});

  gsTestCode('AlternativaCompletaConElseIf',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><variables></variables><block type="Program" id="y8K3OFY%JsjCm*Uq#Dpv" deletable="false" x="30" y="30"><mutation timestamp="1510202309441"></mutation><statement name="program"><block type="AlternativaCompleta" id="MNWz6E`^5ngI]7.%$IUb"><mutation elseif="2" else="1"></mutation><value name="condicion"><block type="puedeMover" id="fe`{wjLfdqTen-noo6c#"><value name="VALUE"><block type="DireccionSelector" id="+UF:VdCz;*AmRK_N75:e"><field name="DireccionDropdown">Este</field></block></value></block></value><statement name="block1"><block type="Poner" id="`F=BEfI=j]PBZOHRfzNF"><value name="COLOR"><block type="ColorSelector" id="SHzOCNnimV7p(z3p[;^Y"><field name="ColorDropdown">Rojo</field></block></value></block></statement><value name="IF1"><block type="puedeMover" id="(.qrOTHG#!n_(nkLSQIa"><value name="VALUE"><block type="DireccionSelector" id="y(GmjFvgNX=*I/KqH+]h"><field name="DireccionDropdown">Oeste</field></block></value></block></value><statement name="DO1"><block type="Sacar" id="P?[YJ0ODfr,P;gZE(+qk"><value name="COLOR"><block type="ColorSelector" id="i5l)K1SmEIRjr9^kQznG"><field name="ColorDropdown">Rojo</field></block></value></block></statement><value name="IF2"><block type="puedeMover" id="YqAavI[#eOn*!|0$(^C@"><value name="VALUE"><block type="DireccionSelector" id="#{,JB!j%U{R35s$7?G[b"><field name="DireccionDropdown">Sur</field></block></value></block></value><statement name="block2"><block type="Mover" id="fs,N4-6ghnxOu!U@(prl"><value name="DIRECCION"><block type="DireccionSelector" id="YIkD:CzF0hlJd3v1q^[_"><field name="DireccionDropdown">Este</field></block></value></block></statement></block></statement></block></xml>',
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
    '<xml xmlns="http://www.w3.org/1999/xhtml"><variables></variables><block type="InteractiveProgram" id="${CGuk~7{sSlYdtq}{?Y" deletable="false" x="-7" y="25"><mutation timestamp="1509521036701"></mutation><statement name="interactiveprogram"><block type="InteractiveKeyBinding" id="6om}mHe,(P0sGz#1.7Yt"><mutation modifierscount="0"></mutation><field name="InteractiveBindingDropdownKey">ARROW_LEFT</field><statement name="block"><block type="Poner" id="BabEe00ufbd6`O}XfVvE"><value name="COLOR"><block type="ColorSelector" id=",0o~IWU5%DLohW[By1#v"><field name="ColorDropdown">Rojo</field></block></value></block></statement><next><block type="InteractiveLetterBinding" id="O9U+of9+(D.[.(rssdlq"><mutation modifierscount="3"></mutation><field name="InteractiveBindingDropdownKey">A</field><field name="d1">SHIFT</field><field name="d2">CTRL</field><field name="d3">ALT</field><statement name="block"><block type="Poner" id="S*ySXAm#eg2Uv:B|T4D^"><value name="COLOR"><block type="ColorSelector" id="`^5)~+rKBrK$IW3,:,@."><field name="ColorDropdown">Verde</field></block></value></block></statement><next><block type="InteractiveNumberBinding" id="VZ^AhWsStU_E+Q(1:@Zs"><mutation modifierscount="2"></mutation><field name="InteractiveBindingDropdownKey">1</field><field name="d1">CTRL</field><field name="d2">SHIFT</field><statement name="block"><block type="Poner" id="$vIU@NWv3kHg#P-0i#P0"><value name="COLOR"><block type="ColorSelector" id="wqa{Z.4vMhl)L;Iwz5Eg"><field name="ColorDropdown">Azul</field></block></value></block></statement></block></next></block></next></block></statement></block></xml>',
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
    '<xml xmlns="http://www.w3.org/1999/xhtml"><variables></variables><block type="InteractiveProgram" id="${CGuk~7{sSlYdtq}{?Y" deletable="false" x="67" y="8"><mutation init="true" timeout="500" timestamp="1509521133888"></mutation><statement name="interactiveprogram"><block type="InteractiveKeyBinding" id="4b4ScAr./*UfqTMf[tWd"><mutation modifierscount="0"></mutation><field name="InteractiveBindingDropdownKey">TAB</field><statement name="block"><block type="Poner" id="dzFh(}!u[Cjoc?L3B0e:"><value name="COLOR"><block type="ColorSelector" id="tu2[`y^6|#@tSuhX6@h9"><field name="ColorDropdown">Negro</field></block></value></block></statement></block></statement><statement name="init"><block type="Poner" id="rHVRgg_m#-%.vKT9^,9w"><value name="COLOR"><block type="ColorSelector" id="byWOHpg*;!wzY%?Q8EZO"><field name="ColorDropdown">Rojo</field></block></value></block></statement><statement name="timeout"><block type="Poner" id="a1=)WHQjAh8eTEEdDgEv"><value name="COLOR"><block type="ColorSelector" id="Gyy*W`^63WBtIq?}Q*w8"><field name="ColorDropdown">Verde</field></block></value></block></statement></block></xml>',
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
