Blockly.GobstonesLanguage.blockIDAliases = {
  "ComandosPrimitivos": "Comandos primitivos",
  "ProcedimientosPrimitivos": "Procedimientos primitivos",
  "ExpresionesPrimitivas": "Expresiones primitivas",
  "FuncionesPrimitivas": "Funciones primitivas"
};

Blockly.GobstonesLanguage.aliasForBlockID = function(id){
  return  this.blockIDAliases[id] || id;
}
