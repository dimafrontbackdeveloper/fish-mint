'use strict';

/**
 * timeout router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::timeout.timeout');
