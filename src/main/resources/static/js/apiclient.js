apiclient = (function () {
    return {
        getBlueprintsByAuthor: function (author, callback) {
            const promise = $.get({
                url: "/blueprints/" + author,
                contentType: "application/json",
            });

            promise.then(function (data) {
                callback(null, data);
            }, function (error) {
                alert("No existen datos del autor!");
            });
        },

        getBlueprintsByNameAndAuthor: function (author, blueprintName, callback) {
            const promise = $.get({
                url: "/blueprints/" + author + "/" + blueprintName,
                contentType: "application/json",
            });
            
            promise.then(function (data) {
                callback(null, data);
            }, function (error) {
                alert("No existen datos del autor!");
            });
        },

        putBlueprintsByNameAndAuthor: function (author, blueprintName, points, callback) {
            const blueprint = {
                author: author,
                points: points,
                name: blueprintName
            };

            const promise = $.ajax({
                url: "/blueprints/" + author + "/" + blueprintName,
                type: "PUT",
                data: JSON.stringify(blueprint),
                contentType: "application/json",
            });

            promise.then(function (data) {
                callback(null, data);
            }, function (error) {
                alert("No existen datos del autor!");
            });
        }
    }
})();