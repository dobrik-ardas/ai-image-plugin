'use strict';

const getService = (name) => {
  return strapi.plugin('strapi-ai-image-plugin').service(name);
};

module.exports = {
  getService,
};
