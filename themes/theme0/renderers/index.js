var render = function (theme, data, meta, require) {

    if(data.error.length == 0 ){
        theme('index', {
            title: [
         
            ],
            header:[
                {
                    partial: 'header',
                    context: {
                        user_name: 'avatar@wso2.com ',
                        user_avatar:'avatar',
                        breadcrumb:'Service Cluster System Statistics'
                    }
                }
            ],
            body: [

                {
                    partial: 'home_graph',
                    context:{
                        data:  data.panels,
                        updateInterval: data.updateInterval
                    }
                }
            ]
        });

    }else{

        theme('index', {
            title: [
             
            ],
            header:[
                {
                    partial: 'header_login',
                }
            ],
            body: [

                {
                    partial: 'error',
                    context:{
                        error:  data.error
                    }
                }
            ]
        });
    }
};