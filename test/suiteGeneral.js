suite('General', function() {
	var element;

	setup(function() {
		element = document.getElementById("gseb");
	});

	test('instantiating the element works', function() {
		assert.equal(element.is, 'gs-element-blockly');
	});

});
