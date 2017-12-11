export interface Branch {
    uuid: string;
    bbox: Bounds;
    nodes: Branch[],
}