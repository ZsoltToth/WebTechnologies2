import CounterConstants from './CounterConstants'
import CounterDispatcher from './CounterDispatcher'

class CounterActions{

    increment(){
        CounterDispatcher.handleViewAction({
            actionType : CounterConstants.INCREASE
        });
    }

    decresement(){
        CounterDispatcher.handleViewAction({
            actionType : CounterConstants.DECREASE
        });
    }

    reset(){
        CounterDispatcher.handleViewAction({
            actionType : CounterConstants.RESET
        });
    }
}

export default new CounterActions();