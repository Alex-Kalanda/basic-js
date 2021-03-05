module.exports = function createDreamTeam(members) {
    if (members === null || members === undefined || !(members.constructor === Array)) {
        return false
    } else if (members.filter(i => typeof (i) === 'string').length === 0) {
        return false
    } else {
        return members.filter(i => typeof (i) === 'string')
            .map(s => s.trim().toUpperCase()[0])
            .sort()
            .join('')
    }
};