
goog.provide('Blockly.ErrorInforming');

Blockly.ErrorInforming = {};

Blockly.ErrorInforming.addToWorkspace = function(workspace){
    workspace.showBlockError = Blockly.ErrorInforming.showBlockError;
    workspace.removeBlockErrors = Blockly.ErrorInforming.removeBlockErrors;

    this.addCssToDocument(Blockly.ErrorInforming.CssContent.join('\n'));
}

/**
 * Method to be mixed into a Blockly Workspace object.
 * Adds posibility of showing different types of errors to a block.
 */
Blockly.ErrorInforming.showBlockError = function(blockId, description) {
    let block = this.getBlockById(blockId);
    Blockly.utils.addClass(block.getSvgRoot(),'blocklyErrorBlock');
    block.setWarningText(description);
    block.warning.setVisible(true);
};

/**
 * Method to be mixed into a Blockly Workspace object.
 * Adds posibility of showing different types of errors to a block.
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
    '.blocklyErrorBlock>.blocklyPath {',
        'stroke: #f00;',
        'stroke-width: 5px;',
    '}',
];