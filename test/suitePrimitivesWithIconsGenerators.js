/* global gsSuite, gsTestCode */

gsSuite('Generadores de procedimientos y funciones primitivas con íconos', function() {
    gsTestCode('Procedimiento no return',
    `<xml xmlns="http://www.w3.org/1999/xhtml">
      <block type="procedures_defnoreturn" id="X{rD-;XsC,EEaa.w}z]J" x="29" y="46">
        <mutation icon="https://raw.githubusercontent.com/MumukiProject/mumuki-guia-alimentacion-saludable/master/00008_La_huerta/tomate.png"></mutation>
        <field name="NAME">Comer tomate</field>
      </block>
    </xml>`,
`/*@ATTRIBUTE@block_icon@https://raw.githubusercontent.com/MumukiProject/mumuki-guia-alimentacion-saludable/master/00008_La_huerta/tomate.png@*/
procedure ComerTomate() {
}\n`);

  gsTestCode('Procedimiento no return - no params',
    `<xml xmlns="http://www.w3.org/1999/xhtml">
      <block type="procedures_defnoreturnnoparams" id="X{rD-;XsC,EEaa.w}z]J" x="29" y="46">
        <mutation icon="https://raw.githubusercontent.com/MumukiProject/mumuki-guia-alimentacion-saludable/master/00008_La_huerta/tomate.png"></mutation>
        <field name="NAME">Comer tomate</field>
      </block>
    </xml>`,
`/*@ATTRIBUTE@block_icon@https://raw.githubusercontent.com/MumukiProject/mumuki-guia-alimentacion-saludable/master/00008_La_huerta/tomate.png@*/
procedure ComerTomate() {
}\n`);

  gsTestCode('Función pura',
    `<xml xmlns="http://www.w3.org/1999/xhtml">
      <variables></variables>
      <block type="procedures_defreturnsimple" x="29" y="153">
        <mutation statements="false" icon="https://image.flaticon.com/icons/png/512/225/225638.png"></mutation>
        <field name="NAME">hilo</field>
        <value name="RETURN">
          <block type="ColorSelector">
            <field name="ColorDropdown">Rojo</field>
          </block>
        </value>
      </block>
    </xml>`,
`/*@ATTRIBUTE@block_icon@https://image.flaticon.com/icons/png/512/225/225638.png@*/
function hilo() {
  return (Rojo)
}\n`);

  gsTestCode('Función declarativa (con procesamiento)',
    `<xml xmlns="http://www.w3.org/1999/xhtml">
      <variables></variables>
      <block type="DefinicionDeFuncionDeclarativa" id="w)A(D,=J$1zEEAK=wZ-a" x="237" y="209">
        <mutation icon="https://raw.githubusercontent.com/MumukiProject/mumuki-guia-alimentacion-saludable/master/00008_La_huerta/hay-parcela.png"></mutation>
        <field name="NAME">hay parcela al Este</field>
        <statement name="STACK">
          <block type="Mover" id="-SOI|PfeR;4#bZhq22sM">
            <value name="DIRECCION">
              <block type="DireccionSelector" id="v6dKraK^xJ86T13MkF9f">
                <field name="DireccionDropdown">Este</field>
              </block>
            </value>
          </block>
        </statement>
        <value name="RETURN">
          <block type="hayBolitas" id="|qzNu*,bs_DjW{p4xv2-">
            <value name="VALUE">
              <block type="ColorSelector" id="aTD#81frquTwXMD,Ucs">
                <field name="ColorDropdown">Rojo</field>
              </block>
            </value>
          </block>
        </value>
      </block>
    </xml>`,
`/*@ATTRIBUTE@block_icon@https://raw.githubusercontent.com/MumukiProject/mumuki-guia-alimentacion-saludable/master/00008_La_huerta/hay-parcela.png@*/
function hayParcelaAlEste() {
  Mover(Este)
  return (hayBolitas(Rojo))
}\n`);
});
