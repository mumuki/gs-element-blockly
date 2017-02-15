/**
 * Chequea que el codigo generado para el xml sea igual a code
 */
 function gsTestCode(name, xml, code) {
   test(name, function() {
     let element = document.getElementById("gseb");
     element.workspaceXml = xml;
     assert.equal(element.generateCode(), code);
   });
 }
