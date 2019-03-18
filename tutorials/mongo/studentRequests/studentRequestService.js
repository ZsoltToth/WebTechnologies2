var winston = require('winston')
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' })
    ]
});

const studentRequestDAO = require('./studentRequestDAO')

function listRequests(callback){
    studentRequestDAO.readRequests((requests) => {
        logger.info(`${requests.length} requests were found!`)
        callback(requests)
    })
}

function listRequestsOfStudent(studentId, callback){
    studentRequestDAO.readRequestsOfStudent(studentId, (requests) =>{
        logger.info(`${requests.length} requests were found!`)
        callback(requests)
    })
}

module.exports = {
    "listRequests" : listRequests,
    "listRequestsOfStudent" : listRequestsOfStudent
}