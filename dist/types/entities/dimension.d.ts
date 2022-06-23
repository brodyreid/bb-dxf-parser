import DxfArrayScanner, { IGroup } from '../DxfArrayScanner.js';
import IGeometry, { IEntity, IPoint } from './geomtry.js';
export interface IDimensionEntity extends IEntity {
    block: string;
    anchorPoint: IPoint;
    middleOfText: IPoint;
    insertionPoint: IPoint;
    linearOrAngularPoint1: IPoint;
    linearOrAngularPoint2: IPoint;
    diameterOrRadiusPoint: IPoint;
    arcPoint: IPoint;
    dimensionType: number;
    attachmentPoint: number;
    actualMeasurement: number;
    text: string;
    angle: number;
}
export default class Dimension implements IGeometry {
    ForEntityName: "DIMENSION";
    parseEntity(scanner: DxfArrayScanner, curr: IGroup): IDimensionEntity;
}
//# sourceMappingURL=dimension.d.ts.map