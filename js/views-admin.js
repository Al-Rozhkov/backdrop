// $Id$

Drupal.viewsUi = {};


Drupal.behaviors.viewsUiAddView = {};

Drupal.behaviors.viewsUiAddView.attach = function (context, settings) {
  var $ = jQuery;
  // Prepopulate the page title, block title, and menu link fields with the
  // view name.
  var $fields = $('#edit-page-title, #edit-block-title, #edit-page-link-properties-title');
  new Drupal.viewsUi.FormFieldFiller($fields);

  // Prepopulate the path field with a URLified version of the view name.
  var $pathField = $('#edit-page-path');
  // Allow only numbers, letters, and dashes in the path.
  var exclude = new RegExp('[^a-z0-9\\-]+', 'g');
  var replace = '-';
  new Drupal.viewsUi.FormFieldFiller($pathField, exclude, replace);
};

/**
 * Constructor for the Drupal.viewsUi.FormFieldFiller object.
 *
 * Prepopulates a form field based on the view name.
 *
 * @param $target
 *   A jQuery object representing the form field to prepopulate.
 * @param exclude
 *   Optional. A regular expression representing characters to exclude from the
 *   target field.
 * @param replace
 *   Optional. A string to use as the replacement value for disallowed
 *   characters.
 */
Drupal.viewsUi.FormFieldFiller = function ($target, exclude, replace) {
  var $ = jQuery;
  this.source = $('#edit-description');
  this.target = $target;
  this.exclude = exclude || false;
  this.replace = replace || '';
  this.initialize();
  // Object constructor; no return value.
};

/**
 * Bind the form-filling behavior.
 */
Drupal.viewsUi.FormFieldFiller.prototype.initialize = function () {
  var $ = jQuery;
  // Populate the form field when the source changes.
  this.source.bind('keyup.viewsUi change.viewsUi', $.proxy(this, 'populate'));
  // Quit populating the field as soon as it gets focus.
  this.target.bind('focus.viewsUi', $.proxy(this, 'unbind'));
};

/**
 * Get the source form field value as altered by the regular expression.
 */
Drupal.viewsUi.FormFieldFiller.prototype.getTransliterated = function () {
  var from = this.source.val();
  if (this.exclude) {
    from = from.toLowerCase().replace(this.exclude, this.replace);
  }
  return from;
};

/**
 * Populate the target form field with the altered source field value.
 */
Drupal.viewsUi.FormFieldFiller.prototype.populate = function () {
  var transliterated = this.getTransliterated();
  this.target.val(transliterated);
};

/**
 * Stop prepopulating the form field.
 */
Drupal.viewsUi.FormFieldFiller.prototype.unbind = function () {
  this.source.unbind('.viewsUi');
  this.target.unbind('.viewsUi');
};



Drupal.behaviors.viewsUiEditView = {};

Drupal.behaviors.viewsUiEditView.attach = function (context, settings) {
  //jQuery('.views-displays').once('views-ui-edit-view').tabs();
};