export declare const DEFAULT_NAMESPACE = "minecraft";
export type AssetDirectory = "textures" | "blockstates" | "models";
export type AssetType = "texture" | "blockstate" | "model";
export interface ResourceLocation {
    namespace: string;
    path: string;
}
export interface PackAssetReference extends ResourceLocation {
    type: AssetType;
    directory: AssetDirectory;
}
export declare function parseResourceLocation(value: string, defaultNamespace?: string): ResourceLocation;
export declare function formatResourceLocation(location: ResourceLocation, options?: {
    omitDefaultNamespace?: boolean;
}): string;
export declare function normalizeResourceLocation(value: string, options?: {
    omitDefaultNamespace?: boolean;
}): string;
export declare function resolveAssetFilePath(path: string): string;
export declare function packPathForAsset(assetPath: string, type: AssetType): string;
export declare function packAssetFromFilePath(filePath: string): PackAssetReference | null;
export declare function formatPackAssetReference(asset: Pick<PackAssetReference, "namespace" | "path">, options?: {
    omitDefaultNamespace?: boolean;
}): string;
//# sourceMappingURL=ResourceLocation.d.ts.map