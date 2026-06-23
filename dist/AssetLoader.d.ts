import * as THREE from "three";
import { BlockModel, BlockStateDefinition } from "./types";
import { ResourcePackManager } from "./ResourcePackManager";
export declare class AssetLoader {
    private resourcePacks;
    private resourcePackOrder;
    private animatedTextureManager;
    private tintManager;
    private packManager;
    private usePackManager;
    private stringCache;
    private blockStateCache;
    private modelCache;
    private textureCache;
    private materialCache;
    private textureLoader;
    private textureAtlas;
    private textureUVMap;
    private resourcePackHash;
    private cacheEnabled;
    constructor(enableCache?: boolean);
    /**
     * Connect to a ResourcePackManager for managed pack loading
     */
    setPackManager(manager: ResourcePackManager): void;
    /**
     * Rebuild atlas from ResourcePackManager's packs
     */
    private rebuildFromPackManager;
    /**
     * Hash a string using SHA-256
     */
    private hashString;
    /**
     * Get packs in priority order for iteration (highest priority first for overrides)
     * Supports both ResourcePackManager and legacy direct loading
     */
    private getOrderedPacks;
    /**
     * Calculate hash of resource pack for cache invalidation
     */
    private calculateResourcePackHash;
    /**
     * Load a resource pack from a blob
     */
    loadResourcePack(blob: Blob): Promise<void>;
    private findEOCD;
    /**
     * Get a string resource (JSON files, etc.)
     */
    getResourceString(path: string, silent?: boolean): Promise<string | undefined>;
    /**
     * Get a binary resource (textures, etc.)
     */
    getResourceBlob(path: string): Promise<Blob | undefined>;
    /**
     * Get a block state definition
     */
    getBlockState(blockId: string): Promise<BlockStateDefinition>;
    getModel(modelPath: string): Promise<BlockModel>;
    private loadAndMergeModel;
    /**
     * Resolve a texture reference in a model
     */
    resolveTexture(textureRef: string, model: BlockModel): string;
    updateAnimations(): void;
    getTexture(texturePath: string): Promise<THREE.Texture>;
    private createTextureFromBlob;
    getTint(blockId: string, properties: Record<string, string>, biome?: string, position?: THREE.Vector3): THREE.Color;
    /**
     * Analyze PNG texture transparency by examining alpha channel data
     */
    analyzeTextureTransparency(texture: THREE.Texture): {
        hasTransparency: boolean;
        transparencyType: "opaque" | "cutout" | "blend";
        averageAlpha: number;
        visibleAlpha: number;
        opaquePixelCount: number;
        transparentPixelCount: number;
        semiTransparentPixelCount: number;
    };
    getSharedAtlasTexture(): THREE.Texture | null;
    getMaterial(texturePath: string, options?: {
        transparent?: boolean;
        tint?: THREE.Color;
        isLiquid?: boolean;
        isWater?: boolean;
        isLava?: boolean;
        faceDirection?: string;
        forceAnimation?: boolean;
        alphaTest?: number;
        opacity?: number;
        biome?: string;
        useAtlas?: boolean;
    }): Promise<THREE.Material>;
    buildTextureAtlas(): Promise<THREE.Texture>;
    /**
     * Cache management methods
     */
    enableCache(): void;
    disableCache(): void;
    clearAtlasCache(): Promise<void>;
    getCacheInfo(): Promise<{
        key: string;
        size: string;
        age: string;
        textureCount: number;
        storage: string;
    }[]>;
    invalidateCache(): void;
    /**
     * Force rebuild atlas (ignores cache)
     */
    rebuildTextureAtlas(): Promise<THREE.Texture>;
    /**
     * List all blockstate files in the resource pack
     */
    listBlockstates(): Promise<string[]>;
    getTextureAtlas(): THREE.Texture | null;
    getTextureUV(path: string): {
        u: number;
        v: number;
        width: number;
        height: number;
    } | null;
    getEntityTexture(entityName: string): Promise<THREE.Texture>;
    private createMissingTexture;
    /**
     * Clean up resources
     */
    dispose(): void;
}
//# sourceMappingURL=AssetLoader.d.ts.map