'use strict';

/**
 * timeout service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::timeout.timeout');
