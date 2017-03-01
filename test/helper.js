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

 function gsSuite(name,func) {
	 suite(name,function(){
		 var element;

		 setup(function() {
			 element = document.getElementById("gseb");
			 element.cleanup();
		 });

		 teardown(function() {
			 element.cleanup();
		 });

		 func();
	 });
 }
