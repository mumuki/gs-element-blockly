/**
 * Chequea que el codigo generado para el xml sea igual a code
 */
function gsTestCode(name, xml, code, options) {
	test(name, function() {
		this.element.workspaceXml = xml;
		printPragmaRow(this.element,options,name);
		assert.equal(this.element.generateCode(options), code);
	});
}

function gsSuite(name,func) {
	suite(name,function(){
		var element;

		setup(function() {
			this.element = document.getElementById("gseb");
			this.element.cleanup();
		});

		teardown(function() {
			this.element.cleanup();
		});

		func.call(this);
	});
}

function printPragmaRow(element,options,name){
	var out = document.getElementById("testOutput");
	if(options) out.innerHTML = out.innerHTML + `<tr><td>${name}</td><td>${element.generateCode()}</td><td>${element.generateCode(options)}</td></tr>`.replace(/\n/g,"<br/>").replace(/  /g,"&nbsp;&nbsp;");
}