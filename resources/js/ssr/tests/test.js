global['context'] = {};
global['context']['config'] = [{"name": "simle", "items": [{"label": "Rich Text", "config": {"icon": "fas fa-pencil-ruler", "label": null, "content": "<h2 style=\"text-align: center;\"><span style=\"color: #27ae60;\"><em><strong>Rich text editor</strong></em></span></h2>", "interactive": true}, "component": "FormHtmlEditor", "inspector": [{"type": "FormTextArea", "field": "content", "config": {"rows": 5, "label": "Rich Text Content", "value": null, "helper": "The HTML text to display"}}, {"type": "ColorSelect", "field": "bgcolor", "config": {"label": "Element Background color", "helper": "Set the element's background color", "options": [{"value": "alert alert-primary", "content": "primary"}, {"value": "alert alert-secondary", "content": "secondary"}, {"value": "alert alert-success", "content": "success"}, {"value": "alert alert-danger", "content": "danger"}, {"value": "alert alert-warning", "content": "warning"}, {"value": "alert alert-info", "content": "info"}, {"value": "alert alert-light", "content": "light"}, {"value": "alert alert-dark", "content": "dark"}]}}, {"type": "FormInput", "field": "conditionalHide", "config": {"label": "Visibility Rule", "helper": "This control is hidden until this expression is true"}}, {"type": "FormInput", "field": "selector", "config": {"label": "CSS Selector Name", "helper": "Use this in your custom css rules", "validation": "regex: [-?[_a-zA-Z]+[_-a-zA-Z0-9]*]"}}], "editor-component": "FormHtmlEditor"}, {"items": [[{"label": "Rich Text", "config": {"icon": "fas fa-pencil-ruler", "label": null, "content": "<p>Left Table</p>", "interactive": true}, "component": "FormHtmlEditor", "inspector": [{"type": "FormTextArea", "field": "content", "config": {"rows": 5, "label": "Rich Text Content", "value": null, "helper": "The HTML text to display"}}, {"type": "ColorSelect", "field": "bgcolor", "config": {"label": "Element Background color", "helper": "Set the element's background color", "options": [{"value": "alert alert-primary", "content": "primary"}, {"value": "alert alert-secondary", "content": "secondary"}, {"value": "alert alert-success", "content": "success"}, {"value": "alert alert-danger", "content": "danger"}, {"value": "alert alert-warning", "content": "warning"}, {"value": "alert alert-info", "content": "info"}, {"value": "alert alert-light", "content": "light"}, {"value": "alert alert-dark", "content": "dark"}]}}, {"type": "FormInput", "field": "conditionalHide", "config": {"label": "Visibility Rule", "helper": "This control is hidden until this expression is true"}}, {"type": "FormInput", "field": "selector", "config": {"label": "CSS Selector Name", "helper": "Use this in your custom css rules", "validation": "regex: [-?[_a-zA-Z]+[_-a-zA-Z0-9]*]"}}], "editor-component": "FormHtmlEditor"}, {"label": "Record List", "config": {"form": null, "icon": "fas fa-th-list", "name": "users", "label": "New Record List", "fields": {"key": "users", "dataName": "users", "jsonData": null, "dataSource": "dataObject"}, "editable": false}, "component": "FormRecordList", "inspector": [{"type": "FormInput", "field": "name", "config": {"name": "Key Name", "label": "Key Name", "helper": "A variable key name is a symbolic name to reference information.", "validation": "regex:/^(?:[A-Z_a-z])(?:[0-9A-Z_a-z])*$/|required"}}, {"type": "FormInput", "field": "label", "config": {"label": "List Label", "helper": "The label describes this record list"}}, {"type": "FormCheckbox", "field": "editable", "config": {"label": "Editable?", "helper": "Should records be editable/removable and can new records be added"}}, {"type": "OptionsList", "field": "fields", "config": {"label": "Fields List", "helper": "List of fields to display in the record list"}}, {"type": "PageSelect", "field": "form", "config": {"label": "Record Form", "helper": "The form to use for adding/editing records"}}, {"type": "ColorSelect", "field": "bgcolor", "config": {"label": "Element Background color", "helper": "Set the element's background color", "options": [{"value": "alert alert-primary", "content": "primary"}, {"value": "alert alert-secondary", "content": "secondary"}, {"value": "alert alert-success", "content": "success"}, {"value": "alert alert-danger", "content": "danger"}, {"value": "alert alert-warning", "content": "warning"}, {"value": "alert alert-info", "content": "info"}, {"value": "alert alert-light", "content": "light"}, {"value": "alert alert-dark", "content": "dark"}]}}, {"type": "ColorSelect", "field": "color", "config": {"label": "Text color", "helper": "Set the element's text color", "options": [{"value": "text-primary", "content": "primary"}, {"value": "text-secondary", "content": "secondary"}, {"value": "text-success", "content": "success"}, {"value": "text-danger", "content": "danger"}, {"value": "text-warning", "content": "warning"}, {"value": "text-info", "content": "info"}, {"value": "text-light", "content": "light"}, {"value": "text-dark", "content": "dark"}]}}, {"type": "FormInput", "field": "conditionalHide", "config": {"label": "Visibility Rule", "helper": "This control is hidden until this expression is true"}}, {"type": "FormInput", "field": "selector", "config": {"label": "CSS Selector Name", "helper": "Use this in your custom css rules", "validation": "regex: [-?[_a-zA-Z]+[_-a-zA-Z0-9]*]"}}], "editor-component": "FormText"}], [{"label": "Rich Text", "config": {"icon": "fas fa-pencil-ruler", "label": null, "content": "<p style=\"text-align: right;\"><strong>Right table</strong></p>", "interactive": true}, "component": "FormHtmlEditor", "inspector": [{"type": "FormTextArea", "field": "content", "config": {"rows": 5, "label": "Rich Text Content", "value": null, "helper": "The HTML text to display"}}, {"type": "ColorSelect", "field": "bgcolor", "config": {"label": "Element Background color", "helper": "Set the element's background color", "options": [{"value": "alert alert-primary", "content": "primary"}, {"value": "alert alert-secondary", "content": "secondary"}, {"value": "alert alert-success", "content": "success"}, {"value": "alert alert-danger", "content": "danger"}, {"value": "alert alert-warning", "content": "warning"}, {"value": "alert alert-info", "content": "info"}, {"value": "alert alert-light", "content": "light"}, {"value": "alert alert-dark", "content": "dark"}]}}, {"type": "FormInput", "field": "conditionalHide", "config": {"label": "Visibility Rule", "helper": "This control is hidden until this expression is true"}}, {"type": "FormInput", "field": "selector", "config": {"label": "CSS Selector Name", "helper": "Use this in your custom css rules", "validation": "regex: [-?[_a-zA-Z]+[_-a-zA-Z0-9]*]"}}], "editor-component": "FormHtmlEditor"}]], "label": "Table", "config": {"icon": "fas fa-table", "label": null, "options": [{"value": "1", "content": "6"}, {"value": "2", "content": "6"}]}, "component": "FormMultiColumn", "container": true, "inspector": [{"type": "ContainerColumns", "field": "options", "config": {"label": "Column Widths", "helper": null}}, {"type": "ColorSelect", "field": "bgcolor", "config": {"label": "Element Background color", "helper": "Set the element's background color", "options": [{"value": "alert alert-primary", "content": "primary"}, {"value": "alert alert-secondary", "content": "secondary"}, {"value": "alert alert-success", "content": "success"}, {"value": "alert alert-danger", "content": "danger"}, {"value": "alert alert-warning", "content": "warning"}, {"value": "alert alert-info", "content": "info"}, {"value": "alert alert-light", "content": "light"}, {"value": "alert alert-dark", "content": "dark"}]}}, {"type": "ColorSelect", "field": "color", "config": {"label": "Text color", "helper": "Set the element's text color", "options": [{"value": "text-primary", "content": "primary"}, {"value": "text-secondary", "content": "secondary"}, {"value": "text-success", "content": "success"}, {"value": "text-danger", "content": "danger"}, {"value": "text-warning", "content": "warning"}, {"value": "text-info", "content": "info"}, {"value": "text-light", "content": "light"}, {"value": "text-dark", "content": "dark"}]}}, {"type": "FormInput", "field": "conditionalHide", "config": {"label": "Visibility Rule", "helper": "This control is hidden until this expression is true"}}, {"type": "FormInput", "field": "selector", "config": {"label": "CSS Selector Name", "helper": "Use this in your custom css rules", "validation": "regex: [-?[_a-zA-Z]+[_-a-zA-Z0-9]*]"}}], "editor-component": "MultiColumn"}]}];

global['context']['data'] = {
    "users": [
        {"name": "John Shuster", "position": "skip"},
        {"name": "Tyler George", "position": "vice"},
        {"name": "Mark Hamilton", "position": "second"},
        {"name": "John Landstiner", "position": "lead"},
    ]
};

require('../dist/main.js');