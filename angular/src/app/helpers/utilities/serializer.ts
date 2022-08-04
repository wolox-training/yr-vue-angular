const { CamelcaseSerializer, SnakecaseSerializer } = require('cerealizr');

export const snakeCaseSerializer = new SnakecaseSerializer();
export const camelCaseSerializer = new CamelcaseSerializer();
