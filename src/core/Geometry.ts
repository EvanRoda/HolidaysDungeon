export class Geometry {
    public static pointInBbox(point: Point, bbox: Bounds): boolean {
        return point[0] >= bbox[0]
            && point[0] <= bbox[2]
            && point[1] >= bbox[1]
            && point[1] <= bbox[3];
    }
}