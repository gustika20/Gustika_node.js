"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/map"));

var _commandRole = _interopRequireDefault(require("./abstract/commandRole"));

var _compositeRole = _interopRequireDefault(require("./abstract/compositeRole"));

var _inputRole = _interopRequireDefault(require("./abstract/inputRole"));

var _landmarkRole = _interopRequireDefault(require("./abstract/landmarkRole"));

var _rangeRole = _interopRequireDefault(require("./abstract/rangeRole"));

var _roletypeRole = _interopRequireDefault(require("./abstract/roletypeRole"));

var _sectionRole = _interopRequireDefault(require("./abstract/sectionRole"));

var _sectionheadRole = _interopRequireDefault(require("./abstract/sectionheadRole"));

var _selectRole = _interopRequireDefault(require("./abstract/selectRole"));

var _structureRole = _interopRequireDefault(require("./abstract/structureRole"));

var _widgetRole = _interopRequireDefault(require("./abstract/widgetRole"));

var _windowRole = _interopRequireDefault(require("./abstract/windowRole"));

var ariaAbstractRoles = new _map.default([['command', _commandRole.default], ['composite', _compositeRole.default], ['input', _inputRole.default], ['landmark', _landmarkRole.default], ['range', _rangeRole.default], ['roletype', _roletypeRole.default], ['section', _sectionRole.default], ['sectionhead', _sectionheadRole.default], ['select', _selectRole.default], ['structure', _structureRole.default], ['widget', _widgetRole.default], ['window', _windowRole.default]]);
var _default = ariaAbstractRoles;
exports.default = _default;