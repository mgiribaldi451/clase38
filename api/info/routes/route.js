
function getInfo(req , res){
    let infoSys ={
        Argumentos: process.argv,
        Procesador: process.platform,
        VersionNode: process.version,
        Memoria: JSON.stringify(process.memoryUsage()),
        DireccionEjecucion: process.execPath,
        ProcessId: process.pid,
        DireccionProyecto: process.cwd()
    }
    //logger.info(`${JSON.stringify(infoSys)}`)
    res.render('info', {process})
}

module.exports={getInfo}