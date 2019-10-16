
import{Component,Input,Output,EventEmitter} from '@angular/core'

@Component({
    selector:"grid-ui",
    templateUrl:"./CustomerApp.Grid.html"
})

export class GridComponent{
    //All the logic Code Behind
    GridColumns:Array<object>=new Array<object>();
    //GridData
    GridData:Array<object>=new Array<object>();

    @Input("grid-columns")
    set SetGridColumns(_gridcolumns:Array<object>){
        this.GridColumns=_gridcolumns;
    }
    @Input("grid-data")
    set SetGridData(_gridData:Array<object>){
        this.GridData=_gridData;
    }
    
    @Output("grid-selected")
    eventemitter:EventEmitter<Object>=
    new EventEmitter<Object>();

    SelectGrid(_Selected:Object){
        //emit out a event
        this.eventemitter.emit(_Selected);    
    }
}


