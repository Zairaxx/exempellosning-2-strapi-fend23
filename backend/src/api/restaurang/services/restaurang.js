'use strict';

/**
 * restaurang service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::restaurang.restaurang');
