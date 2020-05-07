// Initializes the `contact` service on path `/contacts`
const createService = require('feathers-mongoose');
const createModel = require('../../models/grocery.model');
const hooks = require('./grocery.hooks');
const filters = require('./grocery.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'grocery',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/grocery', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('grocery');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
