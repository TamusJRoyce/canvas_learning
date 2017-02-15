

class BackgroundWorker
{
    constructor(backgroundCallbacks, delayInMilliseconds:number = 200)
    {
        this._backgroundCallbacks = [].concat(backgroundCallbacks);
        this._delay = delayInMilliseconds;
    }

    Callbacks()
    {
        return this._backgroundCallbacks;
    }

    Start()
    {
        if (typeof(Worker) !== "undefined")
        {

        }
        else
        {
            this.timerId = setInterval(RunFunctions(), this._delay)
        }
    }

    Stop()
    {

    }

    RunFunctions()
    {
        for(index = 0; index < this._backgroundCallbacks.length; ++index)
        {
            this._backgroundCallbacks[index]();
        }
    }
}

var BackgroundWorkers;

    BackgroundWorker = (backgroundCallbacks, milliseconds:number = 200) =>
    {

    }
}
