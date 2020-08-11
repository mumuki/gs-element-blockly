/**
 * Chequea que el codigo generado para el xml sea igual a code
 */

// eslint-disable-next-line no-unused-vars
function gsTestCode(name, xml, code, options) {
	test(name, function() {
		this.element.workspaceXml = xml;
		printPragmaRow(this.element,options,name); //For debugging pragma printing results
		assert.equal(this.element.generateCode(options), code);
	});
}

// eslint-disable-next-line no-unused-vars
function gsSuite(name,func) {
	suite(name,function(){
		setup(function() {
			this.element = document.getElementById("gseb");
			this.element.cleanup();
		});

		func.call(this);
	});
}

function printPragmaRow(element,options,name){ // Uncomment table in test/index.html for this to work
	var out = document.getElementById("testOutput");
	if(out && options) out.innerHTML = out.innerHTML + `<tr><td>${name}</td><td>${element.generateCode()}</td><td>${element.generateCode(options)}</td></tr>`.replace(/\n/g,"<br/>").replace(/ {2}/g,"&nbsp;&nbsp;");
}
