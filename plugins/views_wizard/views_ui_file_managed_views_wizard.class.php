<?php

class ViewsUiFileManagedViewsWizard extends ViewsUiBaseViewsWizard {
  protected function default_display_options($from, $form_state) {
    $display_options = array();
    $display_options['access']['type'] = 'perm';
    $display_options['cache']['type'] = 'none';
    $display_options['query']['type'] = 'views_query';
    $display_options['exposed_form']['type'] = 'basic';
    $display_options['pager']['type'] = 'full';
    $display_options['style_plugin'] = 'default';
    $display_options['row_plugin'] = 'fields';
    /* Field: File: Name */
    $display_options['fields']['filename']['id'] = 'filename';
    $display_options['fields']['filename']['table'] = 'file_managed';
    $display_options['fields']['filename']['field'] = 'filename';
    $display_options['fields']['filename']['alter']['alter_text'] = 0;
    $display_options['fields']['filename']['alter']['make_link'] = 0;
    $display_options['fields']['filename']['alter']['absolute'] = 0;
    $display_options['fields']['filename']['alter']['trim'] = 0;
    $display_options['fields']['filename']['alter']['word_boundary'] = 0;
    $display_options['fields']['filename']['alter']['ellipsis'] = 0;
    $display_options['fields']['filename']['alter']['strip_tags'] = 0;
    $display_options['fields']['filename']['alter']['html'] = 0;
    $display_options['fields']['filename']['hide_empty'] = 0;
    $display_options['fields']['filename']['empty_zero'] = 0;
    $display_options['fields']['filename']['link_to_file'] = 1;
    /* Field: File: Path */
    $display_options['fields']['uri']['id'] = 'uri';
    $display_options['fields']['uri']['table'] = 'file_managed';
    $display_options['fields']['uri']['field'] = 'uri';
    $display_options['fields']['uri']['alter']['alter_text'] = 0;
    $display_options['fields']['uri']['alter']['make_link'] = 0;
    $display_options['fields']['uri']['alter']['absolute'] = 0;
    $display_options['fields']['uri']['alter']['trim'] = 0;
    $display_options['fields']['uri']['alter']['word_boundary'] = 0;
    $display_options['fields']['uri']['alter']['ellipsis'] = 0;
    $display_options['fields']['uri']['alter']['strip_tags'] = 0;
    $display_options['fields']['uri']['alter']['html'] = 0;
    $display_options['fields']['uri']['hide_empty'] = 0;
    $display_options['fields']['uri']['empty_zero'] = 0;
    $display_options['fields']['uri']['link_to_file'] = 0;
    $display_options['fields']['uri']['file_download_path'] = 1;
    return $display_options;
  }
}
