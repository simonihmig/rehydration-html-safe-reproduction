import Application from 'rehydration-html-safe-reproduction/app';
import config from 'rehydration-html-safe-reproduction/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
