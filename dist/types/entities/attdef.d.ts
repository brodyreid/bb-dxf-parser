import DxfArrayScanner, { IGroup } from '../DxfArrayScanner.js';
import IGeometry, { IEntity, IPoint } from './geomtry.js';
export interface IAttdefEntity extends IEntity {
    scale: number;
    textStyle: 'STANDARD' | string;
    text: string;
    tag: string;
    prompt: string;
    startPoint: IPoint;
    endPoint: IPoint;
    thickness: number;
    textHeight: number;
    rotation: number;
    obliqueAngle: number;
    invisible: boolean;
    constant: boolean;
    verificationRequired: boolean;
    preset: boolean;
    backwards: boolean;
    mirrored: boolean;
    horizontalJustification: number;
    fieldLength: number;
    verticalJustification: number;
    extrusionDirectionX: number;
    extrusionDirectionY: number;
    extrusionDirectionZ: number;
}
export default class Attdef implements IGeometry {
    ForEntityName: "ATTDEF";
    parseEntity(scanner: DxfArrayScanner, curr: IGroup): IAttdefEntity;
}
//# sourceMappingURL=attdef.d.ts.map