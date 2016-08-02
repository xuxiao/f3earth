import { Observable } from '../util/observable';

export class VectorSource extends Observable {

    constructor(options) {
        super();
        this._id = options.id;
        this._type = options.type;
        /* opts.coords actually present featureCollection coords.
         * eg: lines -> [[[123,13],[121,31],[144,15]], [[123,13],[121,31],[144,15]]],
         * eg: points -> []
         */
        const geomCollection = options.coordinates
            ? JSON.parse(options.coordinates) : undefined;
        this._features = [];
        /* if (this._type === Const.LayerType.POINT) {
            this._features.push(lineCoordinates);
        } else if (lineCoordinates !== undefined) {
            lineCoordinates.forEach(coord => this._features.push(coord));
        } */
        if (geomCollection !== undefined) {
            geomCollection.forEach(geom => this._features.push(geom));
        }
        /* this._features.push(lineCoordinates);*/
        this._radius = options.radius;
        this._center = options.center;
    }
    getFeatures() {
        return this._features;
    }
    getLines() {
        return this._features;
    }
    getPoints() {
        return this._features;
    }
    getFill() {
        return this._features;
    }
    getCenter() {
        return this._center;
    }
    getRadius() {
        return this._radius;
    }

}
