
function StudentRequestService(){

    winston = require('winston')
    md5 = require('md5.js')
    logger = winston.createLogger({
        level: 'info',
        format: winston.format.json(),
        defaultMeta: { service: 'user-service' },
        transports: [
            new winston.transports.File({ filename: 'error.log', level: 'error' }),
            new winston.transports.File({ filename: 'combined.log' })
        ]
    });

    this.studentRequestDAO = require('./studentRequestDAO')
}



StudentRequestService.prototype.listRequests = function(callback){
    this.studentRequestDAO.readRequests((requests) => {
        logger.info(`${requests.length} requests were found!`)
        callback(requests)
    })
}

StudentRequestService.prototype.listRequestsOfStudent = function(studentId, callback){
    this.studentRequestDAO.readRequestsOfStudent(studentId, (requests) =>{
        logger.info(`${requests.length} requests were found!`)
        callback(requests)
    })
}

StudentRequestService.prototype.listCommentableRequests = function(){
    //TODO Implement
}

StudentRequestService.prototype.listReady2VerdictRequests = function(){
    //TODO Implement
}

StudentRequestService.prototype.submitRequest = function(request,success, error){
    request['date'] = new Date().toISOString()
    request['sign'] = new md5().update(JSON.stringify({
        student: request['student'],
        desc : request['desc'],
        date : request['date']})).digest('hex')
    this.studentRequestDAO.createRequest(request, ()=>{success()})
}

module.exports = StudentRequestService;