export interface Ilogger{
    Log();
}

export class BaseLogger implements Ilogger{
    Log(){
        
    }
}

export class ConsoleLogger extends BaseLogger {
    Log() {
        console.log("Method Console implemented.");
    }

}

export class DBLogger extends BaseLogger{
    Log() {
        console.log("Method DB implemented.");
    }

}

export class FileLogger extends BaseLogger{
    Log() {
        console.log("Method File implemented.");
    }

}