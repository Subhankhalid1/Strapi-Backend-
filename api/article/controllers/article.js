'use strict';
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {


    // async create(ctx) {
    //     let entities;
    //     if (ctx.is( multipart )){
    //       const [data, files]=parseMultipartData(ctx)
    //       entities = await strapi.services.article.create({...data},{files});
    //     } else {
    //         entities = await strapi.services.article.create({...ctx.request.body});
    //     }
    
    //     return  sanitizeEntity(entity, { model: strapi.models.article });
    //   },

};
