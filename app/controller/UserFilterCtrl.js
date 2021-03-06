/*eslint angular/controller-as: 0*/
/*eslint angular/di: [2,"array"]*/
/*eslint max-len: [2,90]*/
/**
 * Filter by user controller
 */
angular
    .module('SolrHeatmapApp')
    .controller('UserFilterController', ['HeatMapSourceGenerator', '$scope', '$uibModal',
        function(HeatMapSourceGeneratorService, $scope, $uibModal) {

            $scope.showInfo = function(){
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'infoPopup.html',
                    controller: 'InfoWindowController',
                    size: 'lg',
                    resolve: {
                        infoMsg: function(){
                            return solrHeatmapApp.instructions.
                                                    userfilter.instruction;
                        },
                        toolName: function(){
                            return solrHeatmapApp.instructions.
                                                    userfilter.toolTitle;
                        }
                    }
                });
            };
        }]
);
