var render = function (theme, data, meta, require) {
    theme('index', {
        title: [
         
        ],
        header:[
            {
                partial: 'header_login',
                context: {
                    user_name: 'dakshika@wso2.com ',
                    user_avatar:'avatar'
                }
            }
        ],
        body: [

            {
                partial: 'login',
                context:{
                    data:  ''
                }
            }
        ]
    });
};