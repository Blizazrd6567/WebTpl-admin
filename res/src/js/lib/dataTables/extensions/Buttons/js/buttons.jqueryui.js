!function(t){"function"==typeof define&&define.amd?define(["jquery","datatables.net-jqui","datatables.net-buttons"],function(n){return t(n,window,document)}):"object"==typeof exports?module.exports=function(n,e){return n||(n=window),e&&e.fn.dataTable||(e=require("datatables.net-jqui")(n,e).$),e.fn.dataTable.Buttons||require("datatables.net-buttons")(n,e),t(e,n,n.document)}:t(jQuery,window,document)}(function(t,n,e,u){"use strict";var o=t.fn.dataTable;return t.extend(!0,o.Buttons.defaults,{dom:{container:{className:"dt-buttons ui-buttonset"},button:{className:"dt-button ui-button ui-state-default ui-button-text-only",disabled:"ui-state-disabled",active:"ui-state-active"},buttonLiner:{tag:"span",className:"ui-button-text"}}}),o.ext.buttons.collection.text=function(t){return t.i18n("buttons.collection",'Collection <span class="ui-button-icon-primary ui-icon ui-icon-triangle-1-s"/>')},o.Buttons});