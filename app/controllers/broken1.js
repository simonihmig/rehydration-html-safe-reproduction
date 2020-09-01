import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  get content() {
    return '<p>This is <strong>HTML safe</strong> content.</p>';
  }

}
