Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT = 'Describe el procedimiento...';
Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE = "Hacer algo";
Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE = "devolver algo";
Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE = "Definición de procedimiento";
Blockly.Msg.PROCEDURES_DEFNORETURN_NOPARAMS = "(sin parámetros)";
Blockly.Msg.PROCEDURES_DEFRETURN_TITLE = "Definición de función";
Blockly.Msg.PROCEDURES_BEFORE_PARAMS = "con parámetros:"

// https://github.com/google/blockly/blob/3ca7bcc3dfc80651c65c103740feec3de39fb1c3/blocks/procedures.js
// Implementación default -> La cambié para que reciba un defaultName.
var makeProcedureInit = function(withReturn, withParameters, defaultName, title, comment, tooltip, helpUrl) {
  return function() {
    var nameField = new Blockly.FieldTextInput(defaultName,
        Blockly.Procedures.rename);
    nameField.setSpellcheck(false);
    this.appendDummyInput()
        .appendField(title)
        .appendField(nameField, 'NAME')
        .appendField('', 'PARAMS');

    if (withReturn)
      this.appendValueInput('RETURN')
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN);

    if (withParameters)
      this.setMutator(new Blockly.Mutator(['procedures_mutatorarg']));

    if ((this.workspace.options.comments ||
         (this.workspace.options.parentWorkspace &&
          this.workspace.options.parentWorkspace.options.comments)) &&
        comment) {
      this.setCommentText(comment);
    }
    this.setColour(Blockly.Blocks.procedures.HUE);
    this.setTooltip(tooltip);
    this.setHelpUrl(helpUrl);
    this.arguments_ = [];
    this.setStatements_(true);
    this.statementConnection_ = null;

    if (!withReturn && !withParameters) this.updateParams_();
  };
};

// https://github.com/google/blockly/blob/3ca7bcc3dfc80651c65c103740feec3de39fb1c3/blocks/procedures.js
// Implementación default -> Cambié .push por .unshift para que las opciones nuevas aparezcan arriba.
var makeProcedureCustomMenu = function() {
  return function(options) {
    // Add option to create caller.
    var option = {enabled: true};
    var name = this.getFieldValue('NAME');
    option.text = Blockly.Msg.PROCEDURES_CREATE_DO.replace('%1', name);
    var xmlMutation = goog.dom.createDom('mutation');
    xmlMutation.setAttribute('name', name);
    for (var i = 0; i < this.arguments_.length; i++) {
      var xmlArg = goog.dom.createDom('arg');
      xmlArg.setAttribute('name', this.arguments_[i]);
      xmlMutation.appendChild(xmlArg);
    }
    var xmlBlock = goog.dom.createDom('block', null, xmlMutation);
    xmlBlock.setAttribute('type', this.callType_);
    option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
    options.unshift(option);

    // Add options to create getters for each parameter.
    if (!this.isCollapsed()) {
      for (var i = 0; i < this.arguments_.length; i++) {
        var option = {enabled: true};
        var name = this.arguments_[i];
        option.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace('%1', name);
        var xmlField = goog.dom.createDom('field', null, name);
        xmlField.setAttribute('name', 'VAR');
        var xmlBlock = goog.dom.createDom('block', null, xmlField);
        xmlBlock.setAttribute('type', 'variables_get');
        option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
        options.unshift(option);
      }
    }
  };
};

Blockly.Blocks['procedures_defnoreturn'].init = makeProcedureInit(
  false, true,
  Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE,
  Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE,
  Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT,
  Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP,
  Blockly.Msg.PROCEDURES_DEFNORETURN_HELPURL
);
Blockly.Blocks['procedures_defnoreturn'].customContextMenu = makeProcedureCustomMenu();

Blockly.Blocks['procedures_defreturn'].init = makeProcedureInit(
  true, true,
  Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE,
  Blockly.Msg.PROCEDURES_DEFRETURN_TITLE,
  Blockly.Msg.PROCEDURES_DEFRETURN_COMMENT,
  Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP,
  Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL
);
Blockly.Blocks['procedures_defreturn'].customContextMenu = makeProcedureCustomMenu();

Blockly.Blocks['procedures_defnoreturnnoparams'] = {
  init: makeProcedureInit(
    false, false,
    Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE,
    Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE,
    Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT,
    Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP,
    Blockly.Msg.PROCEDURES_DEFNORETURN_HELPURL
  ),
  setStatements_: Blockly.Blocks['procedures_defnoreturn'].setStatements_,
  updateParams_: function() {
    Blockly.Events.disable();
    try {
      this.setFieldValue(Blockly.Msg.PROCEDURES_DEFNORETURN_NOPARAMS, 'PARAMS');
    } finally {
      Blockly.Events.enable();
    }
  },
  mutationToDom: Blockly.Blocks['procedures_defnoreturn'].mutationToDom,
  domToMutation: Blockly.Blocks['procedures_defnoreturn'].domToMutation,
  decompose: Blockly.Blocks['procedures_defnoreturn'].decompose,
  compose: Blockly.Blocks['procedures_defnoreturn'].compose,
  getProcedureDef: Blockly.Blocks['procedures_defnoreturn'].getProcedureDef,
  getVars: Blockly.Blocks['procedures_defnoreturn'].getVars,
  renameVar: Blockly.Blocks['procedures_defnoreturn'].renameVar,
  customContextMenu: Blockly.Blocks['procedures_defnoreturn'].customContextMenu,
  callType_: 'procedures_callnoreturnnoparams'
};

Blockly.Blocks['procedures_callnoreturnnoparams'] = {
  init: Blockly.Blocks['procedures_callnoreturn'].init,
  getProcedureCall: Blockly.Blocks['procedures_callnoreturn'].getProcedureCall,
  renameProcedure: Blockly.Blocks['procedures_callnoreturn'].renameProcedure,
  setProcedureParameters_: Blockly.Blocks['procedures_callnoreturn'].setProcedureParameters_,
  updateShape_: Blockly.Blocks['procedures_callnoreturn'].updateShape_,
  mutationToDom: Blockly.Blocks['procedures_callnoreturn'].mutationToDom,
  domToMutation: Blockly.Blocks['procedures_callnoreturn'].domToMutation,
  renameVar: Blockly.Blocks['procedures_callnoreturn'].renameVar,
  onchange: Blockly.Blocks['procedures_callnoreturn'].onchange,
  customContextMenu: Blockly.Blocks['procedures_callnoreturn'].customContextMenu,
  defType_: 'procedures_defnoreturnnoparams'
};
