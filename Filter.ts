import {FilterConfig} from "./FilterConfig";
export class Filter
{
    private config:FilterConfig;
    private current:Object;

    public getMongoSearch():Object
    {

    }

    public restoreFromData(data:Object)
    {
        
    }

    public getCurrentFilter():Object
    {
        return this.current;
    }
}