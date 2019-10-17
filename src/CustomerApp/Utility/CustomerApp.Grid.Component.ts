
import{Component,
      Input,
      Output,
      EventEmitter} from '@angular/core'

@Component({
    selector:"grid-ui",
    templateUrl:"./CustomerApp.Grid.html"
})

export class GridComponent{
    //All the logic Code Behind
    gridColumns:Array<Object>=new Array<Object>();
    //GridData
    gridData:Array<Object>=new Array<Object>();

    @Input("grid-columns")
    set SetGridColumns(_gridColumns:Array<Object>){
        this.gridColumns=_gridColumns;
    }
    @Input("grid-data")
    set SetGridData(_gridData:Array<Object>){
        this.gridData=_gridData;
    }
    
    @Output("grid-selected")
    eventemitter:EventEmitter<Object>=
    new EventEmitter<Object>();

    SelectGrid(_Selected:Object){
        //emit out a event
        this.eventemitter.emit(_Selected);    
    }
}


