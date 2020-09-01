import Controller from '@ember/controller';
import { htmlSafe } from '@ember/string';

export default class ApplicationController extends Controller {
  get content() {
    return htmlSafe('<p>This is <strong>HTML safe</strong> content.</p>');
  }

}
