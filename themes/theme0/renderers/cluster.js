var render = function (theme, data, meta, require) {
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
                    cluster_name: data.cluster_name
                }
            }
        ],
        body: [

            {
                partial: 'cluster_details',
                context:{
                    testavailability: data.testavailability,
                    cluster_name: data.cluster_name,
                    testdata:  data.tests,
                    testCountFailed: data.testCountFailed,
                    testCountPassed: data.testCountPassed,
                    testCountPassedRatio: data.testCountPassedRatio,
                    updateInterval: data.updateInterval
                }
            }
        ]
    });
};