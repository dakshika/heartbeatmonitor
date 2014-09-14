var render = function (theme, data, meta, require) {

    var  partial_table, stat_category;

    if(data.category.toString() == "nodes_system_stat"){

        partial_table = 'nodes_system_stat_graph';
        stat_category = "Node System Statistics";
    } else {
        partial_table = 'nodes_net_stat_graph';
        stat_category = "Node Network Usage";
    }


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
                        breadcrumb:'Service Cluster System Statistics',
                        cluster_name: data.cluster_name,
                        data_category: stat_category

                    }
                }
            ],

            body: [

                {
                    partial: partial_table,
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