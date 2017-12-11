
goog.provide('Blockly.ErrorInforming');

Blockly.ErrorInforming = {};

Blockly.ErrorInforming.addToWorkspace = function(workspace){
    workspace.showBlockError = Blockly.ErrorInforming.showBlockError;
    workspace.removeBlockErrors = Blockly.ErrorInforming.removeBlockErrors;

    this.addCssToDocument(Blockly.ErrorInforming.CssContent.join('\n'));
}

// Kinds of errors:

Blockly.ErrorInforming.GENERIC_ERROR = {
    title: 'Problema',
    cssClass: 'blocklyGenericError',
};

Blockly.ErrorInforming.INCOMPLETE_ERROR = {
    title: 'Incompleto',
    description: 'Falta completar aquí',
    cssClass: 'blocklyIncompleteError',
};

Blockly.ErrorInforming.TYPE_ERROR = {
    title: 'Problema de tipos',
    cssClass: 'blocklyTypeError',
};

// Most languages have primitives / commands whose high-level logic has preconditions
// to execute. For example, if moving thorugh a path, command "move" executed in a border
// could throw an error. It is one possible kind of runtime error.
Blockly.ErrorInforming.PRECONDITION_ERROR = {
    title: 'Error',
    cssClass: 'blocklyPreconditionError',
};


/**
 * Method to be mixed into a Blockly Workspace object.
 * Adds posibility of showing different types of errors to a block.
 */
Blockly.ErrorInforming.showBlockError = function(blockId, kind = Blockly.ErrorInforming.GENERIC_ERROR) {
    let block = this.getBlockById(blockId);
    Blockly.utils.addClass(block.getSvgRoot(), kind.cssClass);
    block.setWarningText(kind.title + (kind.description ? ': ' + kind.description : ''));
    block.warning.setVisible(true);
};

/**
 * Method to be mixed into a Blockly Workspace object.
 * Removes all errors present in the workspace
 */
Blockly.ErrorInforming.removeBlockErrors = function(){
    this.getAllBlocks().filter(block => block.warning).map(function(block){
        Blockly.utils.removeClass(block.getSvgRoot(),'blocklyErrorBlock');
        block.setWarningText(); // setting no warning makes it remove warning
    });
};

Blockly.ErrorInforming.addCssToDocument = function (cssText) {
    var cssNode = document.createElement('style');
    document.head.insertBefore(cssNode, document.head.lastChild);
  
    var cssTextNode = document.createTextNode(cssText);
    cssNode.appendChild(cssTextNode);
    Blockly.Css.styleSheet_ = cssNode.sheet;
}

Blockly.ErrorInforming.CssContent = [
    '.blocklyGenericError>.blocklyPath {',
        'stroke: #f60;',
        'stroke-width: 3px;',
    '}',

    '.blocklyIncompleteError>.blocklyPath {',
        'stroke: #f00;',
        'stroke-width: 3px;',
    '}',
    
    '.blocklyTypeError>.blocklyPath {',
        'stroke: #f00;',
        'stroke-width: 3px;',
    '}',

    '.blocklyPreconditionError>.blocklyPath {',
        'stroke: #f00;',
        'stroke-width: 3px;',
    '}',
];