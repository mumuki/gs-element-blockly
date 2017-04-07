Blockly.GobstonesLanguage.blockIDAliases = {
  "ComandosPrimitivos": "Comandos primitivos",
  "ProcedimientosPrimitivos": "Procedimientos primitivos",
  "ExpresionesPrimitivas": "Expresiones primitivas",
  "FuncionesPrimitivas": "Funciones primitivas",
  "Color":"ColorSelector",
  "Direccion":"DireccionSelector",
  "Numero":"math_number",
  "Booleano":"BoolSelector",
  "CategoriaAsignacion":"Asignación"
};

Blockly.GobstonesLanguage.aliasForBlockID = function(id){
  return  this.blockIDAliases[id] || id;
}
