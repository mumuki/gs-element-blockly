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

  gsTestCode('BOOM sanitiza comillas',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="BOOM"><field name="boomDescription">Chor"lito</field></block></xml>',
    `BOOM("Chor'lito")\n`);

  gsTestCode('BOOM omite comillas finales e iniciales',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="BOOM"><field name="boomDescription">""Chor"lito"</field></block></xml>',
    `BOOM("'Chor'lito")\n`);

  gsTestCode('Procedimiento',
  '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="procedures_defnoreturn"><mutation><arg name="valor1"></arg><arg name="otroValor"></arg></mutation><field name="NAME">hacer algo con parametros</field><comment pinned="false" h="80" w="160">Un comentario para el procedimiento</comment></block></xml>',
  `//
// Un comentario para el procedimiento
//
procedure HacerAlgoConParametros(valor1, otroValor) {
}\n`);

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
}`);

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
}`);

  gsTestCode('AlternativaSimple',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Program" deletable="false" movable="false" editable="false" x="30" y="30"><statement name="program"><block type="AlternativaSimple"><value name="condicion"><block type="BoolSelector"><field name="BoolDropdown">True</field></block></value><statement name="block"><block type="Poner"><value name="COLOR"><block type="ColorSelector"><field name="ColorDropdown">Rojo</field></block></value></block></statement></block></statement></block></xml>',
    `program {
  if (True) {
    Poner(Rojo)
  }
}`);

  gsTestCode('AlternativaCompleta',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Program" deletable="false" movable="false" editable="false" x="30" y="30"><statement name="program"><block type="AlternativaCompleta"><value name="condicion"><block type="BoolSelector"><field name="BoolDropdown">True</field></block></value><statement name="block1"><block type="Poner"><value name="COLOR"><block type="ColorSelector"><field name="ColorDropdown">Rojo</field></block></value></block></statement><statement name="block2"><block type="Sacar"><value name="COLOR"><block type="ColorSelector"><field name="ColorDropdown">Verde</field></block></value></block></statement></block></statement></block></xml>',
    `program {
  if (True) {
    Poner(Rojo)
  }
  else {
    Sacar(Verde)
  }
}`);

  gsTestCode('Repetición Simple',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Program" deletable="false" movable="false" editable="false" x="30" y="30"><statement name="program"><block type="RepeticionSimple"><value name="count"><block type="math_number"><field name="NUM">5</field></block></value><statement name="block"><block type="Mover"><value name="DIRECCION"><block type="DireccionSelector"><field name="DireccionDropdown">Este</field></block></value></block></statement></block></statement></block></xml>',
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

  gsTestCode('Nombre de procedimiento acepta eñes y tildes', 
    `<xml xmlns="http://www.w3.org/1999/xhtml"><variables></variables><block type="Program" id=")/i9X3Dkcy@_$dH-T^zG" deletable="false" x="30" y="30"><mutation timestamp="1509993436591"></mutation><statement name="program"><block type="procedures_callnoreturnnoparams" id="D|9vDEzTXWyhJZ7y(DAh"><mutation name="Ñáñaras en el occipucioÁáÉéÍíÓóÚú"></mutation></block></statement></block><block type="procedures_defnoreturnnoparams" id="P7)*c#QiF%zUE13b}+(1" x="37" y="115"><field name="NAME">Ñáñaras en el occipucioÁáÉéÍíÓóÚú</field></block></xml>`,
    `procedure ÑáñarasEnElOccipucioÁáÉéÍíÓóÚú() {
}


program {
  ÑáñarasEnElOccipucioÁáÉéÍíÓóÚú()
}`);

  test('Sanitiza bien nombre de procedimiento al cambiarlo', function() {
    let element = document.getElementById("gseb");
    let workspaceXml = `<xml><variables></variables><block type="Program" id=")/i9X3Dkcy@_$dH-T^zG" deletable="false" x="30" y="30"><mutation timestamp="1509990567335"></mutation><statement name="program"><block type="procedures_callnoreturnnoparams" id="D|9vDEzTXWyhJZ7y(DAh"><mutation name="Ñáñaras en el occipucio"></mutation></block></statement></block><block type="procedures_defnoreturnnoparams" id="P7)*c#QiF%zUE13b}+(1" x="37" y="115"><field name="NAME">Ñáñaras en el occipucio</field></block></xml>`;
    element.workspaceXml = workspaceXml;
    element.workspace.getBlockById('P7)*c#QiF%zUE13b}+(1').setFieldValue('Ñ!á"ñ#a$r%a&s/E(n)E=l?O¡c]c}i´p+u*c¨i{o-[','NAME');
    assert.equal(workspaceXml,element.workspaceXml);    
  });

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
  element.workspaceXml = '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Program" id="{XiKDv/%.3{(~rx0EF~*" deletable="false" movable="false" editable="false" x="30" y="30"><statement name="program"><block type="procedures_callnoreturn" id="VX~YA}X|YG.ej0U5*)s+"><mutation name="Repartir caramelos"></mutation><next><block type="procedures_callnoreturn" id=":6V{C^`ucRTL%VLn[]L^"><mutation name="Recolectar papeles"></mutation></block></next></block></statement></block><block type="procedures_defnoreturn" id="7uQ8[(hgK$*j-$(gs0nG" x="29" y="157"><field name="NAME">Repartir caramelos</field><comment pinned="false" h="80" w="160">Describe el procedimiento...</comment><statement name="STACK"><block type="RepeticionSimple" id="FG|pBJ4r-~yJ`m_,rJQp"><value name="count"><block type="math_number" id="WL(,(B~+*[e*,zl76Gms"><field name="NUM">19</field></block></value><statement name="block"><block type="IrAlProximoEstudiante" id="w+[}Z~X+/OPx-smKg$K["><next><block type="DarCaramelo" id="@M`SO=EC!*PQntKvTK(Y"></block></next></block></statement><next><block type="IrAlEscritorio" id="v}#i$d=$=S|NNp8?8b(1"><next><block type="ComerCaramelos" id="~$R#ZL0*p3+D(y2U$u~I"></block></next></block></next></block></statement></block><block type="procedures_defnoreturn" id="l!UoPXA~5R%umTChNj5d" x="294" y="155"><field name="NAME">Recolectar papeles</field><comment pinned="false" h="80" w="160">Describe el procedimiento...</comment><statement name="STACK"><block type="RepeticionSimple" id="%b)*!nUW/o8Cja|{KCh:"><value name="count"><block type="math_number" id="^;8gt/7ifqTNu;6..aty"><field name="NUM">19</field></block></value><statement name="block"><block type="IrAlProximoEstudiante" id="aY3qgGQ+c3_4W#Tex(jj"><next><block type="RecolectarPapel" id="Lx??!jmx8|Xyp1OFg$)k"></block></next></block></statement><next><block type="IrAlEscritorio" id=";Ne$)I+hI[SK`N:H1?,F"></block></next></block></statement></block></xml>';
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

    gsTestCode('Asignacion variable',
      '<xml><block type="Program"><statement name="program"><block type="Asignacion"><field name="varName">x</field><value name="varValue"><block type="ColorSelector"><field name="ColorDropdown">Rojo</field></block></value><next><block type="Poner"><value name="COLOR"><block type="variables_get"><mutation var="x"></mutation></block></value></block></next></block></statement></block></xml>',
      `program {
  x := Rojo
  Poner(x)
}`);

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
}`);

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
}`);

  gsTestCode('Comando Completar',
      '<xml><block type="Program"><statement name="program"><block type="ComandoCompletar"><next><block type="Poner"><value name="COLOR"><block type="ColorSelector"><field name="ColorDropdown">Rojo</field></block></value></block></next></block></statement></block></xml>',
      `program {
  BOOM("El programa todavía no está completo")
  Poner(Rojo)
}`);

});
