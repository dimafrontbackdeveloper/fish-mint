'use strict';

/**
 *  timeout controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::timeout.timeout');
