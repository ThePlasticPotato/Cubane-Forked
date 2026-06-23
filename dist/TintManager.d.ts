import * as THREE from "three";
export declare class TintManager {
    private tintableBlocks;
    constructor();
    isTintable(blockId: string): boolean;
    getTintType(blockId: string): string | null;
    getTint(blockId: string, properties: Record<string, string>, biome?: string, position?: THREE.Vector3): THREE.Color;
    private getRedstoneTint;
    private getFoliageTint;
    private getWaterTint;
    private getStemTint;
}
//# sourceMappingURL=TintManager.d.ts.map