/* global formatXml */

suite('General', function() {
	var element;

	setup(function() {
		element = document.getElementById("gseb");
		element.primitiveProcedures = [ "SacarTodas_", "PonerMuchas__"];
    element.workspaceXml = `<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Program" id="VJhC7i!M25%kK9az!i2k" deletable="false" movable="false" editable="false" x="30" y="30"><statement name="program"><block type="procedures_callnoreturn" id="=~pMG[j|3{8]=~QMaQMb"><mutation name="Monocromatizar imagen"></mutation></block></statement></block><block type="procedures_defnoreturn" id="Uu4n:6%%PEw\`!iRd7gG1" x="265" y="41"><field name="NAME">Monocromatizar imagen</field><comment pinned="false" h="80" w="160">Describe el procedimiento...</comment><statement name="STACK"><block type="RepeticionSimple" id="x-09)8H[Wy\`h/-AnvMRp"><value name="count"><block type="math_number" id="-[e3f{8LyuunQ6?z]e%Q"><field name="NUM">9</field></block></value><statement name="block"><block type="procedures_callnoreturn" id="q?Jqds;\`6QJ,{Hw^s|wX"><mutation name="Monocromatizar fila"></mutation><next><block type="Mover" id="27-rCY12+|kFj,\`Dazw["><value name="DIRECCION"><block type="DireccionSelector" id="(6E[Du:D#raZy]QB)mZ."><field name="DireccionDropdown">Norte</field></block></value></block></next></block></statement><next><block type="procedures_callnoreturn" id="+_CjK3-ZaCVtkqD[/Cm,"><mutation name="Monocromatizar fila"></mutation><next><block type="IrAlBorde" id="VN9%g?h3F@7U!rSD?CMr"><value name="DIRECCION"><block type="DireccionSelector" id="rU%MqceWABN\`.hom3o=0"><field name="DireccionDropdown">Sur</field></block></value></block></next></block></next></block></statement></block><block type="procedures_defnoreturn" id="^RTWL/6Vp-wSJ?Q0e53Y" x="570" y="39"><field name="NAME">Monocromatizar fila</field><comment pinned="false" h="80" w="160"> Describe el procedimiento...</comment><statement name="STACK"><block type="RepeticionSimple"  id="AFn=#XYb*)yA_Bj2-\`cy"><value name="count"><block type="math_number" id="N9\`aT3ecnJ{Dl_u$dO}7"> <field name="NUM">9</field></block></value><statement name="block"> <block type="procedures_callnoreturn" id=",F-DA,nUOch#zjN5GmVK"><mutation name="Monocromatizar celda"> </mutation><next><block type="Mover" id="nn\`eE!G%WSR85d0@plVa"><value name="DIRECCION"> <block type="DireccionSelector" id="ncBtGb?xH\`c1]!U]~8s$"><field name="DireccionDropdown"> Este</field></block></value></block></next></block></statement><next><block  type="procedures_callnoreturn" id="#:WY9XUZr4vEvLZrX=+7"><mutation name="Monocromatizar celda"> </mutation><next><block type="IrAlBorde" id="D8yK~]X(X9i}mF%AKM@I"><value name="DIRECCION"> <block type="DireccionSelector" id="M*E1YV@~{%1Ch|_Zs|I?"><field name="DireccionDropdown"> Oeste</field></block></value></block></next></block></next></block></statement></block> <block type="procedures_defnoreturn" id="YY$IyfNX3E~?}{v~XJ:{" x="40" y="272"> <field name="NAME">Monocromatizar celda</field><comment pinned="false" h="80" w="160"> Describe el procedimiento...</comment><statement name="STACK"><block  type="procedures_callnoreturn" id="dP5c:(x3=44f_-bQ/U|b"><mutation name="Poner promedio de negras"> <arg name="cantidad total de bolitas RGB"></arg></mutation><value name="ARG0"> <block type="OperadorNumerico" id="?y!-DRQ5I^^HNyIwmXjQ"><field name="OPERATOR">+</field> <value name="arg1"><block type="nroBolitas" id="hYc%J?nLui/9e.uEOhAW"><value name="VALUE"> <block type="ColorSelector" id=";AuYT/n]*xq,6_IEnC=."><field name="ColorDropdown">Rojo</field> </block></value></block></value><value name="arg2"><block type="OperadorNumerico" id="+]tjueU|e@EMi{d6ov?,"> <field name="OPERATOR">+</field><value name="arg1"><block type="nroBolitas" id="5fssUpTuPq~FBl.bMa#]"> <value name="VALUE"><block type="ColorSelector" id="6Ifnv+{.6%IZ2Nq*+dDW"><field name="ColorDropdown"> Verde</field></block></value></block></value><value name="arg2"><block type="nroBolitas"  id="%Z~09)%L^TW:us{)6!wn"><value name="VALUE"><block type="ColorSelector" id="%OTyX{]^ZW.iXWxx2#z|"> <field name="ColorDropdown">Azul</field></block></value></block></value></block></value> </block></value><next><block type="SacarTodas_" id="|UD34+rhTT9L3i3CO^4="><value name="arg1"> <block type="ColorSelector" id="*b!UE7[Cv[3i#QR_TY,B"><field name="ColorDropdown">Rojo</field> </block></value><next><block type="SacarTodas_" id="/[).2kShR;aIC+g_oS]u"><value name="arg1"> <block type="ColorSelector" id="ZLPaA|(Z9_=)emz;/Y$/"><field name="ColorDropdown">Verde</field> </block></value><next><block type="SacarTodas_" id="C@:TsNIR}DZ]X*./6w0s"><value name="arg1"> <block type="ColorSelector" id="]9lu0tO#onc.YEohk=LD"><field name="ColorDropdown">Azul</field> </block></value></block></next></block></next></block></next></block></statement></block> <block type="procedures_defnoreturn" id="}ueW!sBmRk}-v17;C:kH" x="367" y="518"><mutation> <arg name="cantidad total de bolitas RGB"></arg></mutation><field name="NAME">Poner promedio de negras </field><comment pinned="false" h="80" w="160">Describe el procedimiento...</comment> <statement name="STACK"><block type="PonerMuchas__" id="AGadeU?4[:Ou0c(8S$)R"><value name="arg1"> <block type="OperadorNumerico" id="2*puN5~CPEun~hYxv5SB"><field name="OPERATOR">div</field><value name="arg1"> <block type="variables_get" id="!m}dLGs.^gd,e98(m1SV"><field name="VAR">cantidad total de bolitas RGB </field></block></value><value name="arg2"><block type="math_number" id="0)DurdGNrcH4wDQi/}{W"> <field name="NUM">3</field></block></value></block></value><value name="arg2"> <block type="ColorSelector" id="e#V#LeRb8Dja\`aE0#Nha"><field name="ColorDropdown">Negro</field> </block></value></block></statement></block></xml>`;
	});

	test('instantiating the element works', function() {
		assert.equal(element.is, 'gs-element-blockly');
	});

	test('No tira el error nextConnection null', function() {
		// Lo mostraba con primitive procedures, en el setUp debería estallar.
		assert.ok(true);
	});

	test('Hace highlight del bloque indicado', function() {
    element.highlightBlock("x-09)8H[Wy`h/-AnvMRp");
    assert.ok(element.workspace.highlightedBlocks_.indexOf(element.workspace.getBlockById("x-09)8H[Wy`h/-AnvMRp") >= 0));
	});

	test('Muestra error del bloque indicado', function() {
    element.showBlockError("e#V#LeRb8Dja`aE0#Nha","Hey, there is an error here!!");
    assert.equal("Hey, there is an error here!!", element.workspace.getBlockById("e#V#LeRb8Dja`aE0#Nha").warning.getText());
	});

	test('Elimina los warnings de los bloques', function() {
		element.showBlockError("e#V#LeRb8Dja`aE0#Nha","Hey, there is an error here!!");
		element.generateCode();
    assert.notOk(element.workspace.getBlockById("e#V#LeRb8Dja`aE0#Nha").warning);
	});

	test('Muestra texto de error de tipos correctamente', function() {
    element.showBlockError("e#V#LeRb8Dja`aE0#Nha", { kind: 'TYPE_ERROR', expectedType:'string', actualType: 'boolean'});
    assert.equal(element.workspace.getBlockById("e#V#LeRb8Dja`aE0#Nha").warning.getText(), "¿Problema de tipos?\n Aquí se esperaba string, pero se encontró boolean");
  });

  suite('Arma correctamente el toolbox', () => {
    test('defaultToolbox, con categorías', () => {
      element.primitiveProcedures = ['ComerTomate'];
      element.toolbox = {
        defaultToolbox: `
        <category name="Cosas">
          <block type="Poner"></block>
          <block type="Sacar"></block>
          <block type="Mover"></block>
        </category>
        <category name="Los cosos primitivos" gbs_custom="PRIMITIVE_PROCEDURES"> </category>`,
      };

      assert.equal(
        formatXml(element._toolboxXml),
        formatXml(`
        <xml>
          <category name="Cosas">
            <block type="Poner" ></block>
            <block type="Sacar" ></block>
            <block type="Mover" ></block>
          </category>
          <category name="Los cosos primitivos" gbs_custom="PRIMITIVE_PROCEDURES">
            <block type="ComerTomate" ></block>
          </category>
        </xml>`)
      );
    });

    test('defaultToolbox, con categorías y showCategories = false', () => {
      element.primitiveProcedures = ['ComerTomate'];
      element.showCategories = false;
      element.toolbox = {
        defaultToolbox: `
        <category name="Cosas">
          <block type="Poner"></block>
          <block type="Sacar"></block>
          <block type="Mover"></block>
        </category>
        <category name="No importa porque no se ve" gbs_custom="PRIMITIVE_PROCEDURES"> </category>`,
      };

      assert.equal(
        formatXml(element._toolboxXml),
        formatXml(`
        <xml>
          <block type="Poner" ></block>
          <block type="Sacar" ></block>
          <block type="Mover" ></block>
          <block type="ComerTomate" ></block>
        </xml>`)
      );
    });

    // La alternativa completa tiene un mutator que se queda enganchado al workspace anterior.
    test('defaultToolbox, con alternativa completa y showCategories = false', () => {
      element.showCategories = false;
      element.toolbox = {
        defaultToolbox: `
        <category name="Estructuras de control">
          <block type="AlternativaCompleta"></block>
        </category>`
      };

      assert.equal(
        formatXml(element._toolboxXml),
        formatXml(`
        <xml>
          <block type="AlternativaCompleta" ></block>
        </xml>`)
      );
    });

    test('defaultToolbox, sin categorías', function() {
      element.primitiveProcedures = ['ComerTomate'];
      element.toolbox = {
        defaultToolbox: `
      <block type="Poner"></block>
      <block type="Sacar"></block>
      <block type="Mover"></block>`
      };

      assert.equal(
        formatXml(element._toolboxXml),
        formatXml(`
        <xml>
          <block type="Poner" ></block>
          <block type="Sacar" ></block>
          <block type="Mover" ></block>
        </xml>`)
      );
    });
  })

/*	test('Tira el error BlockTypeError por falta de definición de procedimientos primitivos', function() {
	  let element = document.getElementById("gseb");
	  element.primitiveProcedures = [];
		var sucedioExcepcion = false;
		try {
	  	element.workspaceXml = `<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Program" id="VJhC7i!M25%kK9az!i2k" deletable="false" movable="false" editable="false" x="30" y="30"><statement name="program"><block type="procedures_callnoreturn" id="=~pMG[j|3{8]=~QMaQMb"><mutation name="Monocromatizar imagen"></mutation></block></statement></block><block type="procedures_defnoreturn" id="Uu4n:6%%PEw\`!iRd7gG1" x="265" y="41"><field name="NAME">Monocromatizar imagen</field><comment pinned="false" h="80" w="160">Describe el procedimiento...</comment><statement name="STACK"><block type="RepeticionSimple" id="x-09)8H[Wy\`h/-AnvMRp"><value name="count"><block type="math_number" id="-[e3f{8LyuunQ6?z]e%Q"><field name="NUM">9</field></block></value><statement name="block"><block type="procedures_callnoreturn" id="q?Jqds;\`6QJ,{Hw^s|wX"><mutation name="Monocromatizar fila"></mutation><next><block type="Mover" id="27-rCY12+|kFj,\`Dazw["><value name="DIRECCION"><block type="DireccionSelector" id="(6E[Du:D#raZy]QB)mZ."><field name="DireccionDropdown">Norte</field></block></value></block></next></block></statement><next><block type="procedures_callnoreturn" id="+_CjK3-ZaCVtkqD[/Cm,"><mutation name="Monocromatizar fila"></mutation><next><block type="IrAlBorde" id="VN9%g?h3F@7U!rSD?CMr"><value name="DIRECCION"><block type="DireccionSelector" id="rU%MqceWABN\`.hom3o=0"><field name="DireccionDropdown">Sur</field></block></value></block></next></block></next></block></statement></block><block type="procedures_defnoreturn" id="^RTWL/6Vp-wSJ?Q0e53Y" x="570" y="39"><field name="NAME">Monocromatizar fila</field><comment pinned="false" h="80" w="160"> Describe el procedimiento...</comment><statement name="STACK"><block type="RepeticionSimple"  id="AFn=#XYb*)yA_Bj2-\`cy"><value name="count"><block type="math_number" id="N9\`aT3ecnJ{Dl_u$dO}7"> <field name="NUM">9</field></block></value><statement name="block"> <block type="procedures_callnoreturn" id=",F-DA,nUOch#zjN5GmVK"><mutation name="Monocromatizar celda"> </mutation><next><block type="Mover" id="nn\`eE!G%WSR85d0@plVa"><value name="DIRECCION"> <block type="DireccionSelector" id="ncBtGb?xH\`c1]!U]~8s$"><field name="DireccionDropdown"> Este</field></block></value></block></next></block></statement><next><block  type="procedures_callnoreturn" id="#:WY9XUZr4vEvLZrX=+7"><mutation name="Monocromatizar celda"> </mutation><next><block type="IrAlBorde" id="D8yK~]X(X9i}mF%AKM@I"><value name="DIRECCION"> <block type="DireccionSelector" id="M*E1YV@~{%1Ch|_Zs|I?"><field name="DireccionDropdown"> Oeste</field></block></value></block></next></block></next></block></statement></block> <block type="procedures_defnoreturn" id="YY$IyfNX3E~?}{v~XJ:{" x="40" y="272"> <field name="NAME">Monocromatizar celda</field><comment pinned="false" h="80" w="160"> Describe el procedimiento...</comment><statement name="STACK"><block  type="procedures_callnoreturn" id="dP5c:(x3=44f_-bQ/U|b"><mutation name="Poner promedio de negras"> <arg name="cantidad total de bolitas RGB"></arg></mutation><value name="ARG0"> <block type="OperadorNumerico" id="?y!-DRQ5I^^HNyIwmXjQ"><field name="OPERATOR">+</field> <value name="arg1"><block type="nroBolitas" id="hYc%J?nLui/9e.uEOhAW"><value name="VALUE"> <block type="ColorSelector" id=";AuYT/n]*xq,6_IEnC=."><field name="ColorDropdown">Rojo</field> </block></value></block></value><value name="arg2"><block type="OperadorNumerico" id="+]tjueU|e@EMi{d6ov?,"> <field name="OPERATOR">+</field><value name="arg1"><block type="nroBolitas" id="5fssUpTuPq~FBl.bMa#]"> <value name="VALUE"><block type="ColorSelector" id="6Ifnv+{.6%IZ2Nq*+dDW"><field name="ColorDropdown"> Verde</field></block></value></block></value><value name="arg2"><block type="nroBolitas"  id="%Z~09)%L^TW:us{)6!wn"><value name="VALUE"><block type="ColorSelector" id="%OTyX{]^ZW.iXWxx2#z|"> <field name="ColorDropdown">Azul</field></block></value></block></value></block></value> </block></value><next><block type="SacarTodas_" id="|UD34+rhTT9L3i3CO^4="><value name="arg1"> <block type="ColorSelector" id="*b!UE7[Cv[3i#QR_TY,B"><field name="ColorDropdown">Rojo</field> </block></value><next><block type="SacarTodas_" id="/[).2kShR;aIC+g_oS]u"><value name="arg1"> <block type="ColorSelector" id="ZLPaA|(Z9_=)emz;/Y$/"><field name="ColorDropdown">Verde</field> </block></value><next><block type="SacarTodas_" id="C@:TsNIR}DZ]X*./6w0s"><value name="arg1"> <block type="ColorSelector" id="]9lu0tO#onc.YEohk=LD"><field name="ColorDropdown">Azul</field> </block></value></block></next></block></next></block></next></block></statement></block> <block type="procedures_defnoreturn" id="}ueW!sBmRk}-v17;C:kH" x="367" y="518"><mutation> <arg name="cantidad total de bolitas RGB"></arg></mutation><field name="NAME">Poner promedio de negras </field><comment pinned="false" h="80" w="160">Describe el procedimiento...</comment> <statement name="STACK"><block type="PonerMuchas__" id="AGadeU?4[:Ou0c(8S$)R"><value name="arg1"> <block type="OperadorNumerico" id="2*puN5~CPEun~hYxv5SB"><field name="OPERATOR">div</field><value name="arg1"> <block type="variables_get" id="!m}dLGs.^gd,e98(m1SV"><field name="VAR">cantidad total de bolitas RGB </field></block></value><value name="arg2"><block type="math_number" id="0)DurdGNrcH4wDQi/}{W"> <field name="NUM">3</field></block></value></block></value><value name="arg2"> <block type="ColorSelector" id="e#V#LeRb8Dja\`aE0#Nha"><field name="ColorDropdown">Negro</field> </block></value></block></statement></block></xml>`;
		} catch (e) {
			assert.equal("BlockTypeError",e.name);
			sucedioExcepcion = true;
		}
		assert.ok(sucedioExcepcion,"Debió haber habido una excepción");
	});
*/
});
