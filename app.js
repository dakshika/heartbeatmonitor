var caramel = require('caramel');

caramel.configs({
    context: '/jaggery_code',
    cache: true,
    negotiation: true,
    themer: function () {
        return 'theme0';
    }
});