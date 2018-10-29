'use strict';

module.exports = function (Member) {

    Member.remoteMethod('sayMyName', {
        accepts: { arg: 'myName', type: 'string',description:'chuck in a name', required: true },
        description: 'this one takes in a name and then says it',
        http: { path: '/say-my-name/:myName', verb: 'get' },
        returns: { arg: 'theResponse', type: 'object' }
    });

    Member.sayMyName = function (myname, callback) {
        var theResponse = 'Your name is ' + myname;
        callback(null,theResponse);
    };

};
