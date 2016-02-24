//define("pages/category",["modules/jquery-mozu","modules/views-collections"],function(e,a){e(document).ready(function(){window.facetingViews=a.createFacetedCollectionViews({$body:e("[data-mz-category]"),$facets:e("[data-mz-facets]"),data:require.mozuData("facetedproducts")})})});
define(['modules/jquery-mozu', "modules/views-collections"], function($, CollectionViewFactory) {
    $(document).ready(function() {
        window.facetingViews = CollectionViewFactory.createFacetedCollectionViews({
            $body: $('[data-mz-category]'),
            template: "category-interior",
            
        });
    });
});
