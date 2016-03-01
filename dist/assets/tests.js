define('cudncute/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'app.js should pass jshint.\napp.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 4, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 6, col 1, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\napp.js: line 13, col 3, \'object short notation\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\napp.js: line 18, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n7 errors');
  });
});
define('cudncute/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('cudncute/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/destroy-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('cudncute/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'cudncute/tests/helpers/start-app', 'cudncute/tests/helpers/destroy-app'], function (exports, _qunit, _cudncuteTestsHelpersStartApp, _cudncuteTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _cudncuteTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _cudncuteTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});
define('cudncute/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/module-for-acceptance.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('cudncute/tests/helpers/resolver', ['exports', 'cudncute/resolver', 'cudncute/config/environment'], function (exports, _cudncuteResolver, _cudncuteConfigEnvironment) {

  var resolver = _cudncuteResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _cudncuteConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _cudncuteConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('cudncute/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('cudncute/tests/helpers/start-app', ['exports', 'ember', 'cudncute/app', 'cudncute/config/environment'], function (exports, _ember, _cudncuteApp, _cudncuteConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _cudncuteConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _cudncuteApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('cudncute/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('cudncute/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('resolver.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'resolver.js should pass jshint.\nresolver.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nresolver.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('cudncute/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'router.js should pass jshint.\nrouter.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nrouter.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nrouter.js: line 4, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nrouter.js: line 10, col 52, Missing semicolon.\nrouter.js: line 14, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n5 errors');
  });
});
define('cudncute/tests/routes/products/product.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/products');
  QUnit.test('routes/products/product.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/products/product.js should pass jshint.\nroutes/products/product.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/products/product.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/products/product.js: line 4, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/products/product.js: line 5, col 5, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/products/product.js: line 6, col 5, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/products/product.js: line 10, col 3, Missing semicolon.\n\n6 errors');
  });
});
define('cudncute/tests/routes/products.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/products.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/products.js should pass jshint.\nroutes/products.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/products.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/products.js: line 4, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/products.js: line 5, col 5, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/products.js: line 5, col 46, Missing semicolon.\n\n5 errors');
  });
});
define('cudncute/tests/services/productsvc.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - services');
  QUnit.test('services/productsvc.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/productsvc.js should pass jshint.\nservices/productsvc.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nservices/productsvc.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nservices/productsvc.js: line 4, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nservices/productsvc.js: line 5, col 5, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nservices/productsvc.js: line 30, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n5 errors');
  });
});
define('cudncute/tests/test-helper', ['exports', 'cudncute/tests/helpers/resolver', 'ember-qunit'], function (exports, _cudncuteTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_cudncuteTestsHelpersResolver['default']);
});
define('cudncute/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('cudncute/tests/unit/routes/products-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:products', 'Unit | Route | products', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('cudncute/tests/unit/routes/products-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/products-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/products-test.js should pass jshint.');
  });
});
define('cudncute/tests/unit/services/products-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:products', 'Unit | Service | products', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('cudncute/tests/unit/services/products-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/services');
  QUnit.test('unit/services/products-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/products-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('cudncute/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map