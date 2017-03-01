/* global Blockly */

var ControlColor = 60;
var CommandColor = 200;
var ExpressionColor = 180;

// Guardo un par de bloques utiles el resto los elimino
delete Blockly.Blocks.procedures_defreturn;
delete Blockly.Blocks.procedures_ifreturn;
Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT = 'Describe el procedimiento...';

Blockly.Blocks.Program = {
	init: function () {
		this.setColour(100);
		this.appendDummyInput().appendField('programa');
		this.appendStatementInput('program');
		this.setDeletable(false);
		this.setEditable(false);
		this.setMovable(false);
	}
};

// ------------------------------------------------------
// Control de flujo de ejecucion:
// ------------------------------------------------------

Blockly.Blocks.Repetir = {
	init: function () {
		this.setColour(ControlColor);
		this.appendValueInput('count')
			.appendField('Repetir');
		this.appendStatementInput('block');
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setInputsInline(true);
	}
};

Blockly.Blocks.RepetirHasta = {
	init: function () {
		this.setColour(ControlColor);
		this.appendValueInput('condicion')
			.setCheck('Boolean')
			.appendField('Repetir Hasta');
		this.appendStatementInput('block');
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setInputsInline(true);
	}
};

Blockly.Blocks.SiEntonces = {
	init: function () {
		this.setColour(ControlColor);
		this.appendValueInput('condicion')
			.appendField('Si');
		this.appendStatementInput('block');
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setInputsInline(true);
	}
};

Blockly.Blocks.SiEntoncesSiNo = {
	init: function () {
		this.setColour(ControlColor);
		this.appendValueInput('condicion')
			.appendField('Si');
		this.appendStatementInput('block1');
		this.appendDummyInput()
				.appendField('si no');
		this.appendStatementInput('block2');
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setInputsInline(true);
	}
};

// ------------------------------------------------------
// Comandos:
// ------------------------------------------------------

Blockly.Blocks.Poner = {
	init: function () {
		this.jsonInit({
			message0: 'Poner %1',
			args0: [
				{
					type: 'input_value',
					name: 'COLOR'
				}
			],
			previousStatement: true,
			nextStatement: true,
			colour: CommandColor,
			tooltip: 'Poner color en casillero.',
			inputsInline: true
		});
	}
};

Blockly.Blocks.Sacar = {
	init: function () {
		this.jsonInit({
			message0: 'Sacar %1',
			args0: [
				{
					type: 'input_value',
					name: 'COLOR'
				}
			],
			previousStatement: true,
			nextStatement: true,
			colour: CommandColor,
			tooltip: 'Sacar color de casillero.',
			inputsInline: true
		});
	}
};

Blockly.Blocks.Mover = {
	init: function () {
		this.jsonInit({
			message0: 'Mover %1',
			args0: [
				{
					type: 'input_value',
					name: 'DIRECCION'
				}
			],
			previousStatement: true,
			nextStatement: true,
			colour: CommandColor,
			tooltip: 'Mover en una dirección.',
			inputsInline: true
		});
	}
};

Blockly.Blocks.IrAlBorde = {
	init: function () {
		this.jsonInit({
			message0: 'IrAlBorde %1',
			args0: [
				{
					type: 'input_value',
					name: 'DIRECCION'
				}
			],
			previousStatement: true,
			nextStatement: true,
			colour: CommandColor,
			tooltip: 'Ir al borde del tablero.',
			inputsInline: true
		});
	}
};

Blockly.Blocks.VaciarTablero = {
	init: function () {
		this.jsonInit({
			message0: 'VaciarTablero',
			previousStatement: true,
			nextStatement: true,
			colour: CommandColor,
			tooltip: 'Vaciar el tablero.',
			inputsInline: true
		});
	}
};

Blockly.Blocks.BOOM = {
	init: function () {
		this.jsonInit({
			message0: 'BOOM',
			previousStatement: true,
			nextStatement: true,
			colour: CommandColor,
			tooltip: 'boom!',
			inputsInline: true
		});
	}
};
// ------------------------------------------------------
// Expresiones:
// ------------------------------------------------------
function createLiteralBlock(name, type) {
	return {
		init: function () {
			this.jsonInit({
				message0: name,
				output: type,
				colour: ExpressionColor
			});
		}
	};
}

function createColorBlock(name) {
	return createLiteralBlock(name, 'Color');
}

function createDireccionBlock(name) {
	return createLiteralBlock(name, 'Direccion');
}

function createLiteralSelectorBlock(type,values){
	return {
		init: function () {
			this.jsonInit({
				type: type,
				message0: "%1",
				args0: [{
					type: "field_dropdown",
					name: type + "Dropdown",
					options: values.map(value => [value,value]),
				}],
				output: type,
				colour: ExpressionColor,
				tooltip: "Escoger " + type,
			});
		}
	};
}

Blockly.Blocks.True = createLiteralBlock('True', 'Boolean');
Blockly.Blocks.False = createLiteralBlock('False', 'Boolean');

Blockly.Blocks.ColorSelector = createLiteralSelectorBlock('Color',['Rojo','Verde','Negro','Azul']);

Blockly.Blocks.Este = createDireccionBlock('Este');
Blockly.Blocks.Oeste = createDireccionBlock('Oeste');
Blockly.Blocks.Norte = createDireccionBlock('Norte');
Blockly.Blocks.Sur =	createDireccionBlock('Sur');

Blockly.Blocks.HayBolitas = {
	init: function () {
		this.jsonInit({
			message0: 'Hay bolitas %1',
			args0: [
				{
					type: 'input_value',
					name: 'COLOR'
				}
			],
			colour: ExpressionColor,
			inputsInline: true,
			output: 'Boolean'
		});
	}
};

Blockly.Blocks.PuedeMover = {
	init: function () {
		this.jsonInit({
			message0: 'PuedeMover %1',
			args0: [
				{
					type: 'input_value',
					name: 'COLOR'
				}
			],
			colour: ExpressionColor,
			inputsInline: true,
			output: 'Boolean'
		});
	}
};

Blockly.Blocks.NroBolitas = {
	init: function () {
		this.jsonInit({
			message0: 'Nro bolitas %1',
			args0: [
				{
					type: 'input_value',
					name: 'COLOR'
				}
			],
			colour: ExpressionColor,
			inputsInline: true,
			output: 'Boolean'
		});
	}
};

// ------------------------------------------------------
// Operaciones:
// ------------------------------------------------------

Blockly.Blocks.Relation = {
	init: function () {
		this.jsonInit({
			message0: '%1 %2 %3 %4',
			args0: [
				{
					type: 'input_value',
					name: 'arg1'
				},
				{
					type: 'field_dropdown',
					name: 'RELATION',
					options: [['==', '=='], ['/=', '/='], ['<=', '<='], ['<', '<'], ['>=', '>='], ['>', '>']]
				},
				{
					type: 'input_dummy'
				},
				{
					type: 'input_value',
					name: 'arg2'
				}
			],
			colour: ExpressionColor,
			inputsInline: false,
			output: 'Boolean'
		});
	}
};

Blockly.Blocks.OpNum = {
	init: function () {
		this.jsonInit({
			message0: '%1 %2 %3 %4',
			args0: [
				{
					type: 'input_value',
					name: 'arg1'
				},
				{
					type: 'field_dropdown',
					name: 'OPERATOR',
					options: [['+', '+'], ['-', '-'], ['*', '*'], ['div', 'div'], ['mod', 'mod'], ['^', '^']]
				},
				{
					type: 'input_dummy'
				},
				{
					type: 'input_value',
					name: 'arg2'
				}
			],
			colour: ExpressionColor,
			inputsInline: false,
			output: 'Number'
		});
	}
};

Blockly.Blocks.OpBoolBinary = {
	init: function () {
		this.jsonInit({
			message0: '%1 %2 %3 %4',
			args0: [
				{
					type: 'input_value',
					name: 'arg1'
				},
				{
					type: 'field_dropdown',
					name: 'OPERATOR',
					options: [['||', '||'], ['&&', '&&']]
				},
				{
					type: 'input_dummy'
				},
				{
					type: 'input_value',
					name: 'arg2'
				}
			],
			colour: ExpressionColor,
			inputsInline: false,
			output: 'Boolean'
		});
	}
};

Blockly.Blocks.Not = {
	init: function () {
		this.jsonInit({
			message0: 'Not %1',
			args0: [
				{
					type: 'input_value',
					name: 'VALUE'
				}
			],
			colour: ExpressionColor,
			inputsInline: true,
			output: 'Boolean'
		});
	}
};
