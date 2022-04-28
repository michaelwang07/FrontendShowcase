var UserProfile = (function () {

    var getName = function () {
        return localStorage.getItem('name');
    };

    var getID = function () {
        return localStorage.getItem('id');
    };

    var setName = function (name) {
        localStorage.setItem('name', name);
    };
    var setID = function (id) {
        localStorage.setItem('id', id);
    };
    return {
        getName: getName,
        setName: setName,
        getID: getID,
        setID: setID
    }

})();

export default UserProfile;