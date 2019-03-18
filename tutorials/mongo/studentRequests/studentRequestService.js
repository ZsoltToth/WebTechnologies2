var winston = require('winston')
var md5 = require('md5.js')
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

function listCommentableRequests(){
    //TODO Implement
}

function listReady2VerdictRequests(){
    //TODO Implement
}

function submitRequest(request,success, error){
    request['date'] = new Date().toISOString()
    request['sign'] = new md5().update(JSON.stringify({
        student: request['student'],
        desc : request['desc'],
        date : request['date']})).digest('hex')
    studentRequestDAO.createRequest(request, ()=>{success()})
}

module.exports = {
    "listRequests" : listRequests,
    "listRequestsOfStudent" : listRequestsOfStudent,
    "submitRequest" : submitRequest
}