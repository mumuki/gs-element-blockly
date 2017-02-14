suite('gs-element-blockly_generator', function() {
  var element;

  setup(function() {
    element = document.getElementById("gseb");
    element.cleanup();
  });

  teardown(function() {
    element.cleanup();
  });

  gsTestCode('Programa vacío',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Program" deletable="false" movable="false" editable="false" x="30" y="30"><statement name="program"></statement></block></xml>',
    'program {\n}');

  gsTestCode('Poner',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Program" deletable="false" movable="false" editable="false" x="30" y="30"><statement name="program"><block type="Poner"><value name="COLOR"><block type="Rojo"></block></value></block></statement></block></xml>',
    `program {
  Poner(Rojo)
}`
  );
});
