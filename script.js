'use strict';

const makeString = function (data) {
    if (typeof data !== 'string') {
        return 'Аргумент не является строкой';
    }
    data = data.trim();
    if (data.length > 30) {
        data = data.slice(0, 29) + '...';
    }
    return data;
};