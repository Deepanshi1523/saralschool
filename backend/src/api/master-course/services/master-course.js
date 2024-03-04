'use strict';

/**
 * master-course service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::master-course.master-course');
